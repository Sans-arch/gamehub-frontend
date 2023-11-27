import { useContext, useEffect, useState } from 'react';
import { Backdrop, Modal } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import lodash, { set } from 'lodash';

import { Container, Form, GameList, Input, Button } from './styles';
import { GameCoverImageSizes, IGame } from '../types';

import { GameCard } from './GameCard';
import apiCaller from '@/src/services/api';
import { AuthContext } from '@/src/contexts/auth';
import { NotificationSnackbar } from '../NotificationSnackbar';

interface CreateListModalProps {
  readonly isCreateListModalOpen: boolean;
  readonly handleCreateListModal: (state: boolean) => void;
}

interface FormData {
  name: string;
}

export function CreateListModal({ isCreateListModalOpen, handleCreateListModal }: CreateListModalProps) {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [games, setGames] = useState<IGame[]>([]);
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);
  const [isListCreated, setIsListCreated] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleCreateCustomList: SubmitHandler<FieldValues> = async data => {
    const { name } = data as FormData;

    if (!user) {
      return;
    }

    const token = localStorage.getItem('@Auth:token');

    if (token) {
      apiCaller.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const payload = {
      userEmail: user.email,
      description: name,
      selectedGamesIds: selectedGames.map(game => game.id),
    };

    apiCaller
      .post('/lists', payload)
      .then(_response => {
        setIsListCreated(true);
        setSelectedGames([]);
      })
      .catch(error => console.log(error));
  };

  function handleSelectGame(slug: string) {
    const gameAlreadySelected = selectedGames.some(selectedGame => selectedGame.slug === slug);

    if (gameAlreadySelected) {
      return setSelectedGames(prevGames => prevGames.filter(game => game.slug !== slug));
    }

    const selectedGame = games.find(game => game.slug === slug);

    if (selectedGame) {
      setSelectedGames(prevGames => [...prevGames, selectedGame]);
    }
  }

  function handleCloseSnackbar() {
    setIsListCreated(false);
  }

  function getMostPopularGames() {
    return apiCaller
      .get('/games/most-popular')
      .then(response => response.data)
      .then(gamesList => {
        const mappedGames = gamesList.map((game: IGame) => {
          game.cover.url = game.cover.url.replace('//', 'https://');
          game.cover.url = game.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);

          return game;
        });

        return mappedGames;
      })
      .then(gamesList => setGames(gamesList))
      .catch(error => console.log(error));
  }

  const debouncedSearch = lodash.debounce(async value => {
    if (value.length === 0) {
      await getMostPopularGames();
      return setHasError(false);
    }

    apiCaller
      .get(`/games/get-by-search-term`, {
        params: {
          searchTerm: value,
        },
      })
      .then(response => response.data)
      .then(gamesList => {
        if (gamesList.length === 0) {
          setHasError(true);
        }
        if (hasError) {
          setHasError(false);
        }

        return gamesList;
      })
      .then(gamesList => {
        const mappedGames = gamesList.map((game: IGame) => {
          game.cover.url = game.cover.url.replace('//', 'https://');
          game.cover.url = game.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);

          return game;
        });

        return mappedGames;
      })
      .then(gamesList => setGames(gamesList))
      .catch(error => console.log(error));
  }, 300);

  function handleChange(value: string) {
    debouncedSearch(value);
  }

  useEffect(() => {
    getMostPopularGames();
  }, []);

  return (
    <>
      <Modal
        open={isCreateListModalOpen}
        onClose={() => handleCreateListModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="create-list-modal"
        slots={{
          backdrop: Backdrop,
        }}
      >
        <Container>
          <h1>Create your list</h1>

          <Form onSubmit={handleSubmit(handleCreateCustomList)} name="create-list-form">
            <Input {...register('name')} type="text" placeholder="Name of the list" />
            <Button type="submit" disabled={selectedGames.length === 0}>
              Create
            </Button>
          </Form>

          <Input
            type="text"
            placeholder="Find game"
            onChange={e => handleChange(e.target.value)}
            style={{
              width: '80%',
              marginBottom: '1.5rem',
            }}
          />
          <GameList>
            {hasError && <h2 style={{ alignSelf: 'center', fontWeight: '400' }}>Game(s) not found!</h2>}

            {games.length == 0 && !hasError && (
              <CircularProgress
                color="secondary"
                sx={{
                  alignSelf: 'center',
                }}
                size={'4rem'}
              />
            )}

            {!hasError &&
              games.map(game => {
                return (
                  <GameCard
                    key={game.slug}
                    slug={game.slug}
                    title={game.name}
                    cover={game.cover}
                    handleSelectGame={handleSelectGame}
                    isSelected={!!selectedGames.find(selectedGame => selectedGame.slug === game.slug)}
                  />
                );
              })}
          </GameList>
        </Container>
      </Modal>

      {isListCreated && (
        <NotificationSnackbar
          type="success"
          message="List created succesfully!"
          handleClose={handleCloseSnackbar}
          isSnackbarOpen={isListCreated}
        />
      )}
    </>
  );
}

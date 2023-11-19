import { useContext, useEffect, useState } from 'react';
import { Backdrop, Modal } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';

import { Container, Form, GameList, Input, Button } from './styles';
import { GameCoverImageSizes, IGame } from '../types';

import { GameCard } from './GameCard';
import apiCaller from '@/src/services/api';
import { AuthContext } from '@/src/contexts/auth';
import { NotificationSnackbar } from '../NotificationSnackbar';

interface CreateListModalProps {
  isCreateListModalOpen: boolean;
  handleCreateListModal: (state: boolean) => void;
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

  useEffect(() => {
    apiCaller
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
          <h1>Crie sua lista</h1>

          <Form onSubmit={handleSubmit(handleCreateCustomList)} name="create-list-form">
            <Input {...register('name')} type="text" placeholder="Nome da lista" />
            <Button type="submit" disabled={selectedGames.length === 0}>
              Criar
            </Button>
          </Form>

          <Input
            type="text"
            placeholder="Buscar por jogo"
            disabled={games.length == 0}
            style={{
              width: '80%',
              marginBottom: '1.5rem',
            }}
          />
          <GameList>
            {games.length == 0 && (
              <CircularProgress
                color="secondary"
                sx={{
                  alignSelf: 'center',
                }}
                size={'4rem'}
              />
            )}

            {games &&
              games.map(game => {
                return (
                  <GameCard
                    key={game.slug}
                    slug={game.slug}
                    title={game.name}
                    originInfo={game.name}
                    cover={game.cover}
                    genres={game.name}
                    rating={game.rating}
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
          message="Lista criada com sucesso"
          handleClose={handleCloseSnackbar}
          isSnackbarOpen={isListCreated}
        />
      )}
    </>
  );
}

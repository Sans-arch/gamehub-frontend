import { useEffect, useState } from 'react';
import { Backdrop, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { Container, Form, GameList } from './styles';
import { GameCoverImageSizes, IGame } from '../../types';

import { GameCard } from './GameCard';
import apiCaller from '@/src/services/api';
import { useAuth } from '@/src/hooks/useAuth';

interface CreateListModalProps {
  isCreateListModalOpen: boolean;
  handleCreateListModal: (state: boolean) => void;
}

interface FormData {
  name: string;
}

export function CreateListModal({ isCreateListModalOpen, handleCreateListModal }: CreateListModalProps) {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();

  const [games, setGames] = useState<IGame[]>([]);
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);

  async function handleCreateCustomList(data: FormData) {
    const { name } = data;

    const payload = {
      userEmail: user.email,
      description: name,
      selectedGamesIds: selectedGames.map(game => game.id),
    };

    console.log(payload);

    apiCaller
      .post('/lists', payload)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  console.log({ selectedGames });

  function handleSelectGame(slug: string) {
    const gameAlreadySelected = selectedGames.some(selectedGame => selectedGame.slug === slug);

    if (gameAlreadySelected) {
      return setSelectedGames(prevGames => prevGames.filter(game => game.slug !== slug));
    }

    const selectedGame = games.find(game => game.slug === slug);
    setSelectedGames(prevGames => [...prevGames, selectedGame]);
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
    <Modal
      open={isCreateListModalOpen}
      onClose={() => handleCreateListModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slots={{
        backdrop: Backdrop,
      }}
    >
      <Container>
        <h1>Crie sua lista</h1>

        <Form onSubmit={handleSubmit(handleCreateCustomList)}>
          <TextField
            {...register('name')}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Nome da lista"
          />
          <Button variant="contained" type="submit" disabled={selectedGames.length === 0}>
            Criar
          </Button>
        </Form>

        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          color="info"
          placeholder="Buscar por jogo"
          sx={{
            width: '80%',
          }}
          disabled={games.length == 0}
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
  );
}

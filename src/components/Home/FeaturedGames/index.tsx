import { BsChevronRight } from 'react-icons/bs';
import { Container, CreateListContainer, CreateListModal, CreateListModalGameCard, CreateListModalGames, GamesContainer, Title } from './styles';
import { Box, CircularProgress, Modal } from '@mui/material';
import { Button } from '@mui/material'

import { useEffect, useState } from 'react';
import apiCaller from '../../../services/api';
import { GameCard } from '../GameCard';

interface IGame {
  id: number;
  name: string;
  slug: string;
  summary: string;
  rating: number;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
}

export enum GameCoverImageSizes {
  THUMB = 't_thumb',
  FULL_HD = 't_1080p',
  HD = 't_720p',
  MICRO = 't_micro',
  COVER_BIG = 't_cover_big',
}

export function FeaturedGames() {
  const [games, setGames] = useState<IGame[]>([]);
  const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);

  function handleCreateListModal(state: boolean) {
    setIsCreateListModalOpen(state);
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

      <Container>
        <CreateListContainer>
          <Button variant="contained" onClick={() => handleCreateListModal(true)}>
            Criar nova lista
          </Button>
        </CreateListContainer>

        <Title>
          <h2>Featured Games</h2>
          <p>
            See more
            <BsChevronRight />
          </p>
        </Title>

        <GamesContainer>
          {!games.length && <CircularProgress />}

          {games.map(game => {
            return (
              <GameCard
                key={game.slug}
                slug={game.slug}
                title={game.name}
                originInfo={game.name}
                cover={game.cover}
                genres={game.name}
                rating={game.rating}
              />
            );
          })}
        </GamesContainer>
      </Container>

      <Modal
        open={isCreateListModalOpen}
        onClose={() => handleCreateListModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateListModal>
          <h1>Crie sua lista</h1>
          <CreateListModalGames>
            {['GTA V', 'Assasins Creed Mirage', 'Starfield', 'Fallout', 'MK 10', 'Forza Motorsport', 'Diablo IV',
              'Halo Infinite', 'The Elder Scrolls VI', 'The Last of Us Part II', 'Cyberpunk 2077', 'God of War', 'The Witcher 3']
              .map(game => {
                return (
                  <CreateListModalGameCard key={game}>
                    {game}
                  </CreateListModalGameCard>
                )
              })}
          </CreateListModalGames>
        </CreateListModal>
      </Modal>
    </>
  );
}

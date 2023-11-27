import { useContext, useEffect, useState } from 'react';
import { Container, CreateListContainer, GamesContainer, Title } from './styles';
import { CircularProgress, Button } from '@mui/material';

import apiCaller from '@services/api';
import { GameCard } from '../GameCard';
import { CreateListModal } from '../CreateListModal';
import { GameCoverImageSizes, IGame } from '../types';
import { AuthContext } from '@/src/contexts/auth';

export function FeaturedGames() {
  const { signed } = useContext(AuthContext);

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
      <Container datatest-id="featured-games-container">
        {signed && (
          <CreateListContainer>
            <Button variant="contained" onClick={() => handleCreateListModal(true)}>
              Create new list
            </Button>
          </CreateListContainer>
        )}

        <Title>
          <h2>Featured Games</h2>
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

      {signed && (
        <CreateListModal handleCreateListModal={handleCreateListModal} isCreateListModalOpen={isCreateListModalOpen} />
      )}
    </>
  );
}

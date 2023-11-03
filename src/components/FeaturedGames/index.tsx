import { useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Container, CreateListContainer, GamesContainer, Title } from './styles';
import { CircularProgress } from '@mui/material';
import { Button } from '@mui/material';

import apiCaller from '@services/api';
import { GameCard } from '../GameCard';
import { CreateListModal } from '../CreateListModal';
import { GameCoverImageSizes, IGame } from '../types';

export function FeaturedGames() {
  // const { isAuthenticated } = useAuth();

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
        {/* {isAuthenticated && (
          <CreateListContainer>
            <Button variant="contained" onClick={() => handleCreateListModal(true)}>
              Criar nova lista
            </Button>
          </CreateListContainer>
        )} */}

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

      {/* {isAuthenticated && isCreateListModalOpen && (
        <CreateListModal handleCreateListModal={handleCreateListModal} isCreateListModalOpen={isCreateListModalOpen} />
      )} */}
    </>
  );
}

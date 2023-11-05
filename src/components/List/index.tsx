import { useEffect, useState } from 'react';

import { Container, GamesArea } from './styles';
import apiCaller from '@/src/services/api';
import { GameCard } from '../GameCard';
import { GameCoverImageSizes } from '../types';
import { CircularProgress } from '@mui/material';

interface ListProps {
  description: string;
  gamesList: {
    id: number;
    gameid: number;
    listid: number;
    profileid: number;
    game: {
      id: number;
      id_igdb: string;
    };
  }[];
}

interface GameFromAPI {
  id: number;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
  name: string;
  rating: number;
  slug: string;
  summary: string;
}

export default function List({ description, gamesList }: ListProps) {
  const [games, setGames] = useState<GameFromAPI[]>([]);

  useEffect(() => {
    const igdb_ids = gamesList.map(game => game.game.id_igdb);

    apiCaller
      .get('/games/get-by-id', {
        params: {
          ids: igdb_ids,
        },
      })
      .then(response => {
        const parsed = response.data.map((arr: GameFromAPI[]) => {
          const [game] = arr;

          game.cover.url = game.cover.url.replace('//', 'https://');
          game.cover.url = game.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);

          return game;
        });

        setGames(parsed);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(description);

  return (
    <Container>
      <h3>{description}</h3>

      <GamesArea>
        {games.length === 0 && (
          <CircularProgress
            color="primary"
            sx={{
              alignSelf: 'center',
            }}
            size={'2rem'}
          />
        )}
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
      </GamesArea>
    </Container>
  );
}

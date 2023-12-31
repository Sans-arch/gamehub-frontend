import { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import { Container, GamesArea, ListDescription } from './styles';
import apiCaller from '@/src/services/api';
import { GameCard } from '../GameCard';
import { GameCoverImageSizes } from '../types';
import { CircularProgress } from '@mui/material';

interface ListProps {
  readonly id: number;
  readonly description: string;
  readonly gamesList: {
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
  readonly id: number;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
  readonly name: string;
  readonly rating: number;
  readonly slug: string;
  readonly summary: string;
}

export default function List({ id, description, gamesList }: ListProps) {
  const [games, setGames] = useState<GameFromAPI[]>([]);

  async function deleteList() {
    await apiCaller.delete(`/lists/${id}`);

    window.location.reload();
  }

  async function getGamesFromList(): Promise<GameFromAPI[]> {
    const igdb_ids = gamesList.map(game => game.game.id_igdb);

    try {
      const gamesFromList = await apiCaller.get('/games/get-by-id', {
        params: {
          ids: igdb_ids,
        },
      });

      const parsedGames = gamesFromList.data.map((arr: GameFromAPI[]) => {
        const [game] = arr;

        game.cover.url = game.cover.url.replace('//', 'https://');
        game.cover.url = game.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);

        return game;
      });

      return parsedGames;
    } catch (error) {
      throw new Error('Error while fetching games from list');
    }
  }

  useEffect(() => {
    getGamesFromList()
      .then(games => setGames(games))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Container data-testid="list-container">
      <ListDescription>
        <h3>{description}</h3>
        <span onClick={deleteList} data-testid="delete-list-button" id="delete-icon" aria-hidden>
          <MdDeleteForever />
        </span>
      </ListDescription>
      <GamesArea>
        {games.length === 0 && <CircularProgress color="primary" sx={{ alignSelf: 'center' }} size={'2rem'} />}
        {games.map(game => {
          return (
            <GameCard
              key={game.slug}
              slug={game.slug}
              title={game.name}
              originInfo={game.name}
              cover={game.cover}
              size="small"
            />
          );
        })}
      </GamesArea>
    </Container>
  );
}

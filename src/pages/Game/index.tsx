import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rating, Skeleton } from '@mui/material';

import { Container, GameContainer, GameInfo, Navbar } from './styles';

import apiCaller from '@/src/services/api';
import { GameCoverImageSizes } from '@components/types';
import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';

interface GameInfo {
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

export default function Game() {
  const { slug } = useParams();

  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    if (slug !== undefined) {
      apiCaller
        .get('/games/get-by-slug', {
          params: {
            gameSlug: slug,
          },
        })
        .then(response => {
          response.data.cover.url = response.data.cover.url.replace('//', 'https://');
          response.data.cover.url = response.data.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);
          setGameInfo(response.data);
          setRatingValue((response.data.rating / 100) * 5);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [slug]);

  return (
    <Container>
      <Navbar>
        <Link to="/">
          <img src={gameHubLogo} alt="Logotipo" width={100} height={100} />
        </Link>

        <h1>{gameInfo?.name}</h1>
      </Navbar>

      <GameContainer>
        {gameInfo ? (
          <>
            <img src={gameInfo?.cover.url} alt={gameInfo?.slug} />

            <GameInfo>
              <p>{gameInfo?.summary}</p>

              <Rating
                name="half-rating"
                className="custom-rating"
                value={ratingValue}
                onChange={(_event, newValue) => {
                  setRatingValue(newValue ? newValue : 0);
                }}
                precision={0.5}
              />
            </GameInfo>
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" animation="wave" width={420} height={520} />

            <GameInfo>
              <Skeleton variant="text" animation="pulse" />
              <Skeleton variant="rectangular" animation="pulse" />
            </GameInfo>
          </>
        )}
      </GameContainer>
    </Container>
  );
}

import { useState, useEffect } from 'react';
import { Rating, Skeleton } from '@mui/material';

import { CardContainer, Container, GameImage, GameInformation } from './styles';

import apiCaller from '@/src/services/api';
import { GameCoverImageSizes } from '@components/types';
import { useLoaderData } from 'react-router-dom';

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

export async function loader({ params }: any) {
  console.log(params);
  return params;
}

export default function Game() {
  const { slug } = useLoaderData() as any;

  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

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
      <CardContainer className={isFlipped ? 'flip' : ''} onClick={handleFlip}>
        <GameImage>
          {gameInfo ? (
            <img src={gameInfo?.cover.url} alt={gameInfo?.slug} />
          ) : (
            <Skeleton variant="rectangular" width={570} height={544} />
          )}
        </GameImage>
        <GameInformation>
          <h1>{gameInfo?.name}</h1>
          <p>{gameInfo?.summary}</p>

          {gameInfo && (
            <Rating
              name="half-rating"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue ? newValue : 0);
              }}
              precision={0.5}
            />
          )}
        </GameInformation>
      </CardContainer>
    </Container>
  );
}

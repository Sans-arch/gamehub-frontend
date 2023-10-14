import { Rating, Skeleton } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { GameCoverImageSizes } from '../Home/FeaturedGames';
import { CardContainer, Container, GameImage, GameInformation } from './styles';

import apiCaller from '@/src/services/api';

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

export function GameLayout() {
  const [gameInfo, setGameInfo] = useState<GameInfo>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

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
            <Image src={gameInfo?.cover.url} width={570} height={544} alt={gameInfo?.slug} />
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
                setRatingValue(newValue);
              }}
              precision={0.5}
            />
          )}
        </GameInformation>
      </CardContainer>
    </Container>
  );
}

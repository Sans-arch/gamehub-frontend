import { Rating, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

import { CardContainer, Container, GameImage, GameInformation } from './styles';

import apiCaller from '@/src/services/api';
import { GameCoverImageSizes } from '../types';

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
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  // useEffect(() => {
  // if (slug !== undefined) {
  //   apiCaller
  //     .get('/games/get-by-slug', {
  //       params: {
  //         gameSlug: slug,
  //       },
  //     })
  //     .then(response => {
  //       response.data.cover.url = response.data.cover.url.replace('//', 'https://');
  //       response.data.cover.url = response.data.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);
  //       setGameInfo(response.data);
  //       setRatingValue((response.data.rating / 100) * 5);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  // }, [slug]);

  return (
    <Container>
      <CardContainer className={isFlipped ? 'flip' : ''} onClick={handleFlip}>
        <GameImage>
          {gameInfo ? (
            <a>as</a>
          ) : (
            // <Image src={gameInfo?.cover.url} width={570} height={544} alt={gameInfo?.slug} />
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

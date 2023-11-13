import { AxiosError } from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Container,
  CreateReviewInput,
  GameContainer,
  GameInfo,
  Navbar,
  ReviewRatingForm,
  ReviewsContainer,
} from './styles';

import apiCaller from '@/src/services/api';
import { GameCoverImageSizes } from '@components/types';
import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';
import GameSkeleton from './Skeleton';
import { Review } from '@/src/components/Review';
import { AuthContext } from '@/src/contexts/auth';

const createRatingSchema = z.object({
  reviewDescription: z.string().nonempty('A descrição é obrigatória'),
});

type ReviewFormData = z.infer<typeof createRatingSchema>;

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
  usersReviews: {
    id: number;
    rating: number;
    description: string;
    gameId: number;
    userId: number;
    createdAt: string;
    user: {
      id: number;
      name: string;
    };
  }[];
}

export default function Game() {
  const { slug } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(createRatingSchema),
  });

  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const { user } = useContext(AuthContext);

  const handleCreateReview: SubmitHandler<FieldValues> = async data => {
    const { reviewDescription } = data as ReviewFormData;

    if (reviewDescription) {
      try {
        const createdReview = await apiCaller.post('/games/create-review', {
          gameId: gameInfo?.id,
          userId: user?.id,
          description: reviewDescription,
          rating: ratingValue,
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            const { error: message } = error.response.data;

            console.log(errors);
          }
        }
      }
    }
  };

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
          response.data.rating = (response.data.rating / 100) * 5;

          setGameInfo(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [slug]);

  console.log(gameInfo);

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

              <Rating name="half-rating" className="custom-rating" value={gameInfo.rating} precision={0.5} readOnly />
            </GameInfo>
          </>
        ) : (
          <GameSkeleton />
        )}
      </GameContainer>

      <ReviewsContainer>
        <ReviewRatingForm onSubmit={handleSubmit(handleCreateReview)}>
          <div>
            <h3>Dê uma nota:</h3>
            <Rating
              name="half-rating"
              className="custom-rating"
              value={ratingValue}
              onChange={(_event, newValue) => {
                setRatingValue(newValue ? newValue : 0);
              }}
              precision={0.5}
            />
          </div>
          <CreateReviewInput {...register('reviewDescription')} type="text" placeholder="Escreva sua avaliação" />
        </ReviewRatingForm>

        {gameInfo?.usersReviews.map(review => (
          <Review
            key={review.id}
            name={review.user.name}
            content={review.description}
            rating={review.rating}
            createdAt={review.createdAt}
          />
        ))}
      </ReviewsContainer>
    </Container>
  );
}

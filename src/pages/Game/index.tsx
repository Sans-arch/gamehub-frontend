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
  const { user, signed } = useContext(AuthContext);

  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviews, setReviews] = useState<GameInfo['usersReviews']>([]);

  const handleCreateReview: SubmitHandler<FieldValues> = async data => {
    const { reviewDescription } = data as ReviewFormData;

    if (reviewDescription) {
      try {
        const { data } = await apiCaller.post('/games/create-review', {
          gameId: gameInfo?.id,
          userId: user?.id,
          description: reviewDescription,
          rating: ratingValue,
        });

        setReviews(prevState => [...prevState, data]);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
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
          setReviews(response.data.usersReviews);
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

              <Rating name="half-rating" className="custom-rating" value={gameInfo.rating} precision={0.5} readOnly />
            </GameInfo>
          </>
        ) : (
          <GameSkeleton />
        )}
      </GameContainer>

      {gameInfo && (
        <ReviewsContainer>
          {signed && (
            <ReviewRatingForm onSubmit={handleSubmit(handleCreateReview)}>
              <div>
                <h3>Dê uma nota:</h3>
                <Rating
                  name="half-rating"
                  className="custom-rating"
                  value={ratingValue}
                  onChange={(_event, newValue) => {
                    setRatingValue(Number(newValue));
                  }}
                  precision={0.5}
                />
              </div>
              <CreateReviewInput {...register('reviewDescription')} type="text" placeholder="Escreva sua avaliação" />
            </ReviewRatingForm>
          )}

          {!signed && reviews.length > 0 && <h3>Avaliações dos usuários:</h3>}

          {reviews
            .sort((a, b) => {
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            })
            .map(review => (
              <Review
                key={review.id}
                userId={review.user.id}
                name={review.user.name}
                content={review.description}
                rating={review.rating}
                createdAt={review.createdAt}
              />
            ))}
        </ReviewsContainer>
      )}
    </Container>
  );
}

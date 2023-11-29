import { AxiosError } from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

import {
  Container,
  CreateReviewInput,
  GameContainer,
  GameInfo,
  GamePlatforms,
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
import { PlatformIcon } from '@/src/components/PlatformIcon';

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
  first_release_date: number;
  platforms: {
    id: number;
    name: string;
    platform_logo: {
      id: number;
      url: string;
    };
  }[];
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

  const sortedReviews = [...reviews].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  useEffect(() => {
    if (slug !== undefined) {
      apiCaller
        .get('/games/get-by-slug', {
          params: {
            gameSlug: slug,
          },
        })
        .then(response => response.data)
        .then((gameInfo: GameInfo) => {
          gameInfo.cover.url = gameInfo.cover.url.replace('//', 'https://');
          gameInfo.cover.url = gameInfo.cover.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);
          gameInfo.rating = (gameInfo.rating / 100) * 5;

          gameInfo.platforms = gameInfo.platforms
            .filter(platform => platform.platform_logo)
            .map(platform => {
              platform.platform_logo.url = platform.platform_logo.url.replace('//', 'https://');
              platform.platform_logo.url = platform.platform_logo.url.replace('t_thumb', GameCoverImageSizes.FULL_HD);

              return platform;
            });

          setGameInfo(gameInfo);
          setReviews(gameInfo.usersReviews);
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
            <img src={gameInfo.cover.url} alt={gameInfo.slug} />

            <GameInfo>
              <p>{gameInfo.summary}</p>
              <Rating name="half-rating" className="custom-rating" value={gameInfo.rating} precision={0.5} readOnly />

              <h3>Release date: </h3>
              <p>{format(new Date(gameInfo.first_release_date * 1000), 'dd/MM/yyyy')}</p>
              <h3 id="heading-platforms">Available on the following platforms:</h3>
              <GamePlatforms>
                <div>
                  {gameInfo.platforms
                    .sort((a, b) => {
                      return a.name.localeCompare(b.name);
                    })
                    .map(platform => (
                      <PlatformIcon key={platform.id} platform={platform} />
                    ))}
                </div>
              </GamePlatforms>
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
                <h3>Give a rating:</h3>
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
              <CreateReviewInput {...register('reviewDescription')} type="text" placeholder="Write your review" />
            </ReviewRatingForm>
          )}

          {!signed && reviews.length > 0 && <h3>User reviews:</h3>}

          {sortedReviews.map(review => (
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

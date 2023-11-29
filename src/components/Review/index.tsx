import { Rating } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';

import { ReviewContainer } from './styles';
import { useContext } from 'react';
import { AuthContext } from '@/src/contexts/auth';

interface ReviewProps {
  readonly name: string;
  readonly content: string;
  readonly rating: number;
  readonly createdAt: string;
  readonly userId: number;
}

export function Review({ name, content, rating, userId, createdAt }: ReviewProps) {
  const { user } = useContext(AuthContext);
  const relativeTime = formatDistanceToNow(parseISO(createdAt), { addSuffix: true });

  return (
    <ReviewContainer data-testid="review-container">
      <div>
        <h3>
          {name} {user?.id === userId && <strong>(you)</strong>}
        </h3>
        <div>
          <Rating name="half-rating" value={rating} precision={0.5} readOnly />
        </div>
      </div>
      <span>{relativeTime}</span>

      <p>{content}</p>
    </ReviewContainer>
  );
}

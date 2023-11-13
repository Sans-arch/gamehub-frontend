import { Rating } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ReviewContainer } from './styles';
import { useContext } from 'react';
import { AuthContext } from '@/src/contexts/auth';

interface ReviewProps {
  name: string;
  content: string;
  rating: number;
  createdAt: string;
  userId: number;
}

export function Review({ name, content, rating, userId, createdAt }: ReviewProps) {
  const { user } = useContext(AuthContext);
  const relativeTime = formatDistanceToNow(parseISO(createdAt), { addSuffix: true, locale: ptBR });

  return (
    <ReviewContainer>
      <div>
        <h3>
          {name} {user?.id === userId && <strong>(você)</strong>}
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

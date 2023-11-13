import { Rating } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ReviewContainer } from './styles';

interface ReviewProps {
  name: string;
  content: string;
  rating: number;
  createdAt: string;
}

export function Review({ name, content, rating, createdAt }: ReviewProps) {
  const relativeTime = formatDistanceToNow(parseISO(createdAt), { addSuffix: true, locale: ptBR });

  return (
    <ReviewContainer>
      <div>
        <h3>{name}</h3>
        <div>
          <Rating name="half-rating" value={rating} precision={0.5} readOnly />
        </div>
      </div>
      <span>{relativeTime}</span>

      <p>{content}</p>
    </ReviewContainer>
  );
}

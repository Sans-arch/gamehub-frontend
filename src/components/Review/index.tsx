import { Rating } from '@mui/material';
import { ReviewContainer } from './styles';

interface ReviewProps {
  name: string;
  content: string;
  rating: number;
}

export function Review({ name, content, rating }: ReviewProps) {
  return (
    <ReviewContainer>
      <div>
        <h3>{name}</h3>
        <div>
          <Rating name="half-rating" value={rating} precision={0.5} readOnly />
        </div>
      </div>

      <p>{content}</p>
    </ReviewContainer>
  );
}

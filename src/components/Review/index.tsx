import { Rating } from '@mui/material';
import { ReviewContainer } from './styles';

interface ReviewProps {
  name: string;
  content: string;
}

export function Review({ name, content }: ReviewProps) {
  return (
    <ReviewContainer>
      <div>
        <h3>
          {/* {name} <strong>(você)</strong> */}
          {name}

          <Rating name="half-rating" className="custom-rating" value={2} precision={0.5} />
        </h3>
      </div>
      {/* <span>Cerca de 2h</span> */}

      {/* <p>Muito bom Devon, parabéns!! 👏👏</p> */}
      <p>{content}</p>
    </ReviewContainer>
  );
}

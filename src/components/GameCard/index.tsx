import { useNavigate } from 'react-router-dom';
import { Container, Content } from './styles';

export interface GameCardProps {
  title: string;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
  originInfo: string;
  genres: string;
  rating: number;
  slug: string;
}

export function GameCard({ title, cover, originInfo, slug }: GameCardProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/game/${slug}`);
  }

  return (
    <Container onClick={handleClick} data-testid="gamecard-container">
      <img
        src={cover.url}
        alt={title}
        width={700}
        height={933}
        style={{
          objectFit: 'cover',
        }}
      />
      <Content>
        <span>{originInfo}</span>
        <p>{title}</p>
      </Content>
    </Container>
  );
}

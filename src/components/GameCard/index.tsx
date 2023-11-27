import { useNavigate } from 'react-router-dom';
import { Container, Content, SmallContainer, SmallContent } from './styles';

export interface GameCardProps {
  readonly title: string;
  readonly cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
  readonly originInfo: string;
  readonly genres?: string;
  readonly rating?: number;
  readonly slug: string;
  readonly size?: 'small' | 'medium' | 'large';
}

export function GameCard({ title, cover, originInfo, slug, size = 'large' }: GameCardProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/game/${slug}`);
  }

  if (size === 'small') {
    return (
      <SmallContainer onClick={handleClick} data-testid="gamecard-container">
        <img src={cover.url} alt={title} />
        <SmallContent>
          <span>{originInfo}</span>
          <p>{title}</p>
        </SmallContent>
      </SmallContainer>
    );
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

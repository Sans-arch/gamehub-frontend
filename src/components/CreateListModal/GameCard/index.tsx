import { Container, Content } from './styles';

interface GameCardProps {
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
  handleSelectGame: (slug: string) => void;
  isSelected: boolean;
}

export function GameCard({ title, cover, slug, isSelected, handleSelectGame }: GameCardProps) {
  return (
    <Container onClick={() => handleSelectGame(slug)} $is-selected={isSelected}>
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
        <p>{title}</p>
      </Content>
    </Container>
  );
}

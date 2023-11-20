import { Container, Content } from './styles';

export interface GameCardProps {
  readonly title: string;
  readonly cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
  readonly slug: string;
  readonly handleSelectGame: (slug: string) => void;
  readonly isSelected: boolean;
}

export function GameCard({ title, cover, slug, isSelected, handleSelectGame }: GameCardProps) {
  return (
    <Container onClick={() => handleSelectGame(slug)} $is-selected={isSelected} data-testid="gamecard-container">
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

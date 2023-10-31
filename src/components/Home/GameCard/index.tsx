import { useRouter } from 'next/router';
import { Container, Content } from './styles';
import Image from 'next/image';

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

export function GameCard({ title, cover, originInfo, genres, slug }: GameCardProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/games/${slug}`);
  }

  return (
    <Container onClick={handleClick}>
      <Image
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

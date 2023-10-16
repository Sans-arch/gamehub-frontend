import { useRouter } from 'next/router';
import { Container, Content } from './styles';
import Image from 'next/image';

interface IGameCard {
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

export function GameCard({ title, cover, originInfo, genres, slug }: IGameCard) {
  const router = useRouter();

  function handleClick() {
    router.push(`/games/${slug}`);
  }

  return (
    <Container>
      <Image
        src={cover.url}
        alt={title}
        width={250}
        height={370}
        style={{
          objectFit: 'contain',
        }}
      />
      <Content>
        <span>{originInfo}</span>
        <p>{title}</p>
      </Content>
    </Container>
  );
}

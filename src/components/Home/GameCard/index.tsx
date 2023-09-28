import {
  Container,
  Content,
  Genre,
  ImdbRating,
  Rating,
  RottenTomatoesRating,
} from "./styles";

import imdbImg from "../../../assets/images/imdb.png";
import rottenTomatoesImg from "../../../assets/images/rotten_tomatoes.png";
import Image from "next/image";

interface IGameCard {
  title: string;
  imgUrl: string;
  originInfo: string;
  genres: string;
  ratings: {
    imdb: number;
    rotten: number;
  };
}

export function GameCard({
  title,
  imgUrl,
  originInfo,
  genres,
  ratings,
}: IGameCard) {
  return (
    <Container>
      <Image
        src={imgUrl}
        alt={title}
        width={250}
        height={370}
        objectFit="contain"
      />
      <Content>
        <span>{originInfo}</span>
        <p>{title}</p>
      </Content>
    </Container>
  );
}

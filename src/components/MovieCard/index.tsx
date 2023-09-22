import {
  Container,
  Content,
  Genre,
  ImdbRating,
  Rating,
  RottenTomatoesRating,
} from "./styles";

import imdbImg from "../../assets/images/imdb.png";
import rottenTomatoesImg from "../../assets/images/rotten_tomatoes.png";
import Image from "next/image";

interface IMovieCard {
  title: string;
  imgUrl: string;
  originInfo: string;
  genres: string;
  ratings: {
    imdb: number;
    rotten: number;
  };
}

export function MovieCard({
  title,
  imgUrl,
  originInfo,
  genres,
  ratings,
}: IMovieCard) {
  const formattedImdbRating = ratings.imdb.toPrecision(3);

  return (
    <Container>
      <Image src={imgUrl} alt={title} width={20} height={20} />
      <Content>
        <span>{originInfo}</span>
        <p>{title}</p>

        <Rating>
          <ImdbRating>
            <Image
              id="imdbImage"
              src={imdbImg.src}
              alt="IMDb logo"
              width={20}
              height={20}
            />

            <span>{`${formattedImdbRating}/100`}</span>
          </ImdbRating>

          <RottenTomatoesRating>
            <Image
              id="rottenTomatoesImage"
              src={rottenTomatoesImg.src}
              alt="Rotten Tomatoes logo"
              width={rottenTomatoesImg.width}
              height={rottenTomatoesImg.height}
            />
            <span>{`${ratings.rotten}%`}</span>
          </RottenTomatoesRating>
        </Rating>

        <Genre>{genres}</Genre>
      </Content>
    </Container>
  );
}

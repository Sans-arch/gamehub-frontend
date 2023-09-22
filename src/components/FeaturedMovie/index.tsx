import { BsChevronRight } from "react-icons/bs";
import { Container, MoviesContainer, Title } from "./styles";

import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import apiCaller from "../../services/api";
import { MovieCard } from "../MovieCard";

interface IMovie {
  id: number;
  title: string;
  originInfo: string;
  releaseYear: number;
  genres: string;
  director: string;
  posterUrl: string;
  imdbRating: number;
  rottenRating: number;
}

export function FeaturedMovie() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    apiCaller
      .get("/movies/featured")
      .then((response) => response.data)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Title>
        <h2>Featured Movie</h2>
        <p>
          See more
          <BsChevronRight />
        </p>
      </Title>

      <MoviesContainer>
        {!movies.length && <CircularProgress />}
        {movies.map((movie) => {
          console.log(movie);

          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              originInfo={movie.originInfo}
              imgUrl={movie.posterUrl}
              genres={movie.genres}
              ratings={{
                imdb: movie.imdbRating,
                rotten: movie.rottenRating,
              }}
            />
          );
        })}
      </MoviesContainer>
    </Container>
  );
}

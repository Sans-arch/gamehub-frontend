import { BsChevronRight } from "react-icons/bs";
import { Container, GamesContainer, Title } from "./styles";

import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import apiCaller from "../../../services/api";
import { GameCard } from "../GameCard";

interface IGame {
  backgroundImage: string;
  esrbRating: {
    id: number;
    name: string;
    slug: string;
  };
  name: string;
  platforms: any[];
  released: string;
  slug: string;
  stores: any[];
}

export function FeaturedGame() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    apiCaller
      .get("/games/featured")
      .then((response) => response.data)
      .then((data) => setGames(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Title>
        <h2>Featured Games</h2>
        <p>
          See more
          <BsChevronRight />
        </p>
      </Title>

      <GamesContainer>
        {!games.length && <CircularProgress />}

        {games.map((game) => {
          return (
            <GameCard
              key={game.slug}
              title={game.name}
              originInfo={game.name}
              imgUrl={game.backgroundImage}
              genres={game.name}
              ratings={{
                imdb: game.esrbRating.id,
                rotten: game.esrbRating.id,
              }}
            />
          );
        })}
      </GamesContainer>
    </Container>
  );
}

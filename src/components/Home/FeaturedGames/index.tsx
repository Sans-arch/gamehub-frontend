import { BsChevronRight } from "react-icons/bs";
import { Container, GamesContainer, Title } from "./styles";

import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import apiCaller from "../../../services/api";
import { GameCard } from "../GameCard";

interface IGame {
  id: number;
  name: string;
  slug: string;
  summary: string;
  rating: number;
  cover: {
    id: number;
    game: number;
    height: number;
    url: string;
    width: number;
  };
}

enum GameCoverImageSizes {
  THUMB = "t_thumb",
  FULL_HD = "t_1080p",
  HD = "t_720p",
  MICRO = "t_micro",
  COVER_BIG = "t_cover_big",
}

export function FeaturedGames() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    apiCaller
      .get("/games/most-popular")
      .then((response) => response.data)
      .then((gamesList) => {
        const mappedGames = gamesList.map((game: IGame) => {
          game.cover.url = game.cover.url.replace("//", "https://");
          game.cover.url = game.cover.url.replace(
            "t_thumb",
            GameCoverImageSizes.FULL_HD
          );

          return game;
        });

        return mappedGames;
      })
      .then((gamesList) => setGames(gamesList))
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
              cover={game.cover}
              genres={game.name}
              rating={game.rating}
            />
          );
        })}
      </GamesContainer>
    </Container>
  );
}

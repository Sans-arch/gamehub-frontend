import { Rating } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

import {
  Container,
  Content,
  Description,
  GameInitialInfo,
  GameMedia,
  LogoContainer,
  MainGameImageContainer,
  Overlay,
  Title,
} from "./styles";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";
import fifa from "../../../assets/images/fifaatualizado.png";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export function Layout() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <Container>
      <Overlay>
        <LogoContainer>
          <Image src={logo.src} alt="Logo" width={176} height={181} />
        </LogoContainer>
        <GameInitialInfo>
          <Content>
            <Title>EA Sports FC 24</Title>
            <p className="developer">EA Sports</p>

            <Rating
              id="game-rating"
              precision={0.5}
              value={ratingValue}
              onChange={(event, newValue) => {
                if (newValue) {
                  setRatingValue(newValue);
                }
              }}
            />
            <p className="release">Released On: SEP 29</p>
          </Content>
        </GameInitialInfo>
      </Overlay>

      <GameMedia>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        {/* <MainGameImageContainer>
          <Image src={fifa.src} alt="Logo" width={1120} height={570} />
        </MainGameImageContainer> */}

        {/* <Description>
          <p>
            EA Sports FC 24 contains more than 30 leagues, featuring over 700
            teams. It has more than 19,000 players, and 100 stadiums. Familiar
            competitions confirmed include the Champions League, Premier League
            (England), Bundesliga (Germany), and La Liga (Spain).
          </p>
        </Description> */}
      </GameMedia>
    </Container>
  );
}

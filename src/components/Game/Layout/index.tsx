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
  Rating,
  Title,
} from "./styles";
import { AiFillStar } from "react-icons/ai";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";
import fifa from "../../../assets/images/fifaatualizado.png";

export function Layout() {
  return (
    <Container>
      <Overlay>
        <LogoContainer>
          <Image src={logo.src} alt="Logo" width={176} height={181} />
        </LogoContainer>
        <GameInitialInfo>
          <Content>
            <Title>EA Sports FC 24</Title>
            <p>EA Sports</p>

            <Rating>
              <AiFillStar style={{ color: "#FFD700" }} />
              <AiFillStar style={{ color: "#FFD700" }} />
              <AiFillStar style={{ color: "#FFD700" }} />
              <AiFillStar style={{ color: "#D9D9D9" }} />
              <AiFillStar style={{ color: "#D9D9D9" }} />
            </Rating>

            <span>Released On: SEP 29</span>
          </Content>
        </GameInitialInfo>
      </Overlay>

      <GameMedia>
        <MainGameImageContainer>
          <Image src={fifa.src} alt="Logo" width={1120} height={570} />
        </MainGameImageContainer>

        <Description>
          <p>
            EA Sports FC 24 contains more than 30 leagues, featuring over 700
            teams. It has more than 19,000 players, and 100 stadiums. Familiar
            competitions confirmed include the Champions League, Premier League
            (England), Bundesliga (Germany), and La Liga (Spain).
          </p>
        </Description>
      </GameMedia>
    </Container>
  );
}

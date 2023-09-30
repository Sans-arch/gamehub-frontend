import Image from "next/image";
import { Container, GameInitialInfo, Overlay, Rating, Title } from "./styles";
import { AiFillStar } from "react-icons/ai";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";

export function Layout() {
  return (
    <Container>
      <Overlay>
        <Image src={logo.src} alt="Logo" width={176} height={181} />
        <GameInitialInfo>
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
        </GameInitialInfo>
      </Overlay>
    </Container>
  );
}

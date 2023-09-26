import Image from "next/image";
import { LuCircleEqual } from "react-icons/lu";

import {
  Container,
  Logo,
  MainImage,
  Navbar,
  Searchbar,
  SignIn,
} from "./styles";
import gameHubLogo from "../../../assets/logo/logo-white-removebg-preview.png";

export function MainSlider() {
  return (
    <Container>
      <Navbar>
        <Logo>
          <Image
            src={gameHubLogo.src}
            alt="Logotipo"
            width={100}
            height={100}
          />
        </Logo>

        <Searchbar>
          <input type="text" placeholder="What do you want to play?" />
        </Searchbar>

        <SignIn>
          <LuCircleEqual />
        </SignIn>
      </Navbar>
    </Container>
  );
}

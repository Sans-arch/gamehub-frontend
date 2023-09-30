import Image from "next/image";
import { LuCircleEqual } from "react-icons/lu";

import { Container, Logo, MainGame, Navbar, Searchbar, SignIn } from "./styles";
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

      <MainGame>
        <h1>Cyberpunk 2077: Phantom Liberty</h1>
        <p>
          Phantom Liberty is a new spy-thriller expansion for the open-world
          action-adventure RPG Cyberpunk 2077. As cyber-enhanced mercenary V,
          join secret agent Solomon Reed to unravel a web of shattered loyalties
          and sinister political machinations.
        </p>
      </MainGame>
    </Container>
  );
}

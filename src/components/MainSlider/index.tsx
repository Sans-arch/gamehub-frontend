import { Container, Logo, Navbar, Searchbar, SignIn } from "./styles";

import { LuCircleEqual } from "react-icons/lu";

import tvLogo from "../../assets/logo/tv.png";
import Image from "next/image";

export function MainSlider() {
  return (
    <Container>
      <Navbar>
        <Logo>
          <Image src={tvLogo.src} alt="Logotipo" width={40} height={40} />
          <h2>MovieAPI</h2>
        </Logo>

        <Searchbar>
          <input type="text" placeholder="What do you want to watch?" />
        </Searchbar>

        <SignIn>
          <span>Sign in</span>
          <LuCircleEqual />
        </SignIn>
      </Navbar>
    </Container>
  );
}

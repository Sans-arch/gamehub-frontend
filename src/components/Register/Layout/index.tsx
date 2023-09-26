import Image from "next/image";
import {
  Container,
  Dialog,
  LoginButton,
  LoginSidebar,
  RegisterContainer,
} from "./styles";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";

export function Layout() {
  return (
    <Container>
      <Dialog>
        <LoginSidebar>
          <Image src={logo.src} alt="Logo" width={176} height={181} />
          <h1>Bem-vindo de volta!</h1>
          <p>Acesse sua conta agora mesmo!</p>
          <LoginButton>Entrar</LoginButton>
        </LoginSidebar>

        <RegisterContainer>
          <h1>Crie sua conta</h1>

          <form>
            <input type="text" name="" id="" placeholder="Nome" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Senha" />
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

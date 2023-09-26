import { useState, FormEvent } from "react";
import Image from "next/image";
import {
  Container,
  Dialog,
  LoginButton,
  LoginSidebar,
  RegisterButton,
  RegisterContainer,
} from "./styles";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";

export function Layout() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(event.target);
  }

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

          <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder="Nome" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Senha" />
            <RegisterButton type="submit">Cadastrar</RegisterButton>
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

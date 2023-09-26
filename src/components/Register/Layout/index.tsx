import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { hashSync, genSaltSync } from "bcryptjs";

import {
  Container,
  Dialog,
  LoginButton,
  LoginSidebar,
  RegisterButton,
  RegisterContainer,
} from "./styles";

import logo from "../../../assets/logo/logo-white-removebg-preview.png";
import apiCaller from "../../../services/api";

export function Layout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const salt = genSaltSync(10);

    const userInfo = {
      name,
      email,
      password: hashSync(password, salt),
    };

    console.log(userInfo);

    apiCaller
      .post("/auth/register", userInfo)
      .then((response) => {})
      .catch((error) => {});

    resetFormFields();
  }

  function resetFormFields() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
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
            <input
              type="text"
              placeholder="Nome"
              onChange={handleName}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={handlePassword}
              value={password}
            />
            <RegisterButton type="submit">Cadastrar</RegisterButton>
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

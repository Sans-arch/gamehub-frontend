import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { hashSync, genSaltSync } from 'bcryptjs';
import Link from 'next/link';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';

import logo from '../../../assets/logo/logo-white-removebg-preview.png';
import apiCaller from '../../../services/api';

export function Layout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      .post('/auth/register', userInfo)
      .then(response => {})
      .catch(error => {});

    resetFormFields();
  }

  function resetFormFields() {
    setName('');
    setEmail('');
    setPassword('');
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
          <h1>Bem-vindo ao GameHub!</h1>
          <p>Crie sua conta aqui!</p>
          <Link href="/register">
            <LoginButton>Cadastrar</LoginButton>
          </Link>
        </LoginSidebar>

        <RegisterContainer>
          <h1>Faça login</h1>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={handleEmail} value={email} />
            <input type="password" placeholder="Senha" onChange={handlePassword} value={password} />
            <a href="">Esqueceu sua senha?</a>
            <RegisterButton type="submit">Entrar</RegisterButton>
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

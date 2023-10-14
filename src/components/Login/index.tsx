import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';

import logo from '../../assets/logo/logo-white-removebg-preview.png';
import { AuthContext } from '@/src/contexts/AuthContext';

interface FormData {
  email: string;
  password: string;
}

export function LoginLayout() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: FormData) {
    await signIn(data.email, data.password);
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

          <form onSubmit={handleSubmit(handleSignIn)}>
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Senha" />
            <a href="">Esqueceu sua senha?</a>
            <RegisterButton type="submit">Entrar</RegisterButton>
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

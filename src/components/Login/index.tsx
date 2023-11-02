import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/src/hooks/useAuth';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';

interface FormData {
  email: string;
  password: string;
}

export function LoginLayout() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  async function handleSignIn(data: any) {
    await login({
      login: data.email,
      password: data.password,
    });
  }

  return (
    <Container>
      <Dialog>
        <LoginSidebar>
          {/* <Link href="/">
            <Image src={logo.src} alt="Logo" width={176} height={181} />
          </Link>
          <h1>Bem-vindo ao GameHub!</h1>
          <p>Crie sua conta aqui!</p>
          <Link href="/register">
            <LoginButton>Cadastrar</LoginButton>
          </Link> */}
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

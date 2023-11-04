import { Link, Navigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';
import { useContext } from 'react';
import { AuthContext } from '@/src/contexts/auth';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn, signed } = useContext(AuthContext);

  async function handleSignIn(data) {
    if (data.email && data.password) {
      await signIn(data.email, data.password);
    }
  }

  if (signed) {
    return <Navigate to="/" />;
  } else {
    return (
      <Container>
        <Dialog>
          <LoginSidebar>
            <Link to="/">
              <img src={logo} alt="Logo" width={176} height={181} />
            </Link>
            <h1>Bem-vindo ao GameHub!</h1>
            <p>Crie sua conta aqui!</p>
            <Link to="/register">
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
}

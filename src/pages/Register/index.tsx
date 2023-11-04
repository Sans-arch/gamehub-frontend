import { setCookie } from 'nookies';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';

import logo from '../../assets/logo/logo-white-removebg-preview.png';
import apiCaller from '@/src/services/api';

export default function Register() {
  const { register, handleSubmit } = useForm();

  function handleSignIn(data) {
    apiCaller
      .post('/auth/register', {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(response => {
        const { token } = response.data;
        setCookie(null, 'gamehub-token', token);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container>
      <Dialog>
        <LoginSidebar>
          <Link to="/">
            <img src={logo} alt="Logo" width={176} height={181} />
          </Link>
          <h1>Bem-vindo de volta!</h1>
          <p>Acesse sua conta agora mesmo!</p>
          <Link to="/login">
            <LoginButton>Entrar</LoginButton>
          </Link>
        </LoginSidebar>

        <RegisterContainer>
          <h1>Crie sua conta</h1>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <input {...register('name')} type="text" placeholder="Nome" />
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Senha" />
            <RegisterButton type="submit">Cadastrar</RegisterButton>
          </form>
        </RegisterContainer>
      </Dialog>
    </Container>
  );
}

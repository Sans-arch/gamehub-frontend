import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { AuthContext } from '@/src/contexts/auth';
import { Box, Container, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { signUp, signed } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleSignUp: SubmitHandler<FieldValues> = async data => {
    const { email, password } = data as Inputs;

    if (email && password) {
      await signUp(data.name, data.email, data.password);
    }
  };

  if (signed) {
    return <Navigate to="/" />;
  } else {
    return (
      <Container>
        <Box>
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

            <form onSubmit={handleSubmit(handleSignUp)}>
              <input {...register('name')} type="text" placeholder="Nome" />
              <input {...register('email')} type="email" placeholder="Email" />
              <input {...register('password')} type="password" placeholder="Senha" />
              <RegisterButton type="submit">Cadastrar</RegisterButton>
            </form>
          </RegisterContainer>
        </Box>
      </Container>
    );
  }
}

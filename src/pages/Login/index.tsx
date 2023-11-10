import { Link, Navigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Container, Box, LoginButton, RegisterButton, RegisterContainer, RegisterSidebar, Form } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';
import { useContext } from 'react';
import { AuthContext } from '@/src/contexts/auth';

const createUserFormSchema = z.object({
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido').toLowerCase(),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const { signIn, signed } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<FieldValues> = async data => {
    const { email, password } = data as CreateUserFormData;

    if (email && password) {
      await signIn(data.email, data.password);
    }
  };

  if (signed) {
    return <Navigate to="/" />;
  } else {
    return (
      <Container>
        <Box>
          <RegisterSidebar>
            <Link to="/">
              <img src={logo} alt="Logo" width={176} height={181} />
            </Link>
            <h1>Bem-vindo ao GameHub!</h1>
            <p>Crie sua conta aqui!</p>
            <Link to="/register">
              <LoginButton>Cadastrar</LoginButton>
            </Link>
          </RegisterSidebar>

          <RegisterContainer>
            <h1>Faça login</h1>

            <Form onSubmit={handleSubmit(handleSignIn)}>
              <div>
                <input {...register('email')} type="email" placeholder="Email" className={errors.email && 'invalid'} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Senha"
                  className={errors.email && 'invalid'}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <RegisterButton type="submit">Entrar</RegisterButton>
            </Form>
          </RegisterContainer>
        </Box>
      </Container>
    );
  }
}

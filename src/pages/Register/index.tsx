import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { AuthContext } from '@/src/contexts/auth';
import { Box, Container, Form, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    }),
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido').toLowerCase(),
  password: z.string().nonempty('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Register() {
  const { signUp, signed } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const handleSignUp: SubmitHandler<FieldValues> = async data => {
    const { email, password } = data as CreateUserFormData;

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

            <Form onSubmit={handleSubmit(handleSignUp)}>
              <div>
                <input {...register('name')} type="text" placeholder="Nome" className={errors.name && 'invalid'} />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div>
                <input {...register('email')} type="email" placeholder="Email" className={errors.email && 'invalid'} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Senha"
                  className={errors.password && 'invalid'}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <RegisterButton type="submit" disabled={!!errors.email || !!errors.name || !!errors.password}>
                Cadastrar
              </RegisterButton>
            </Form>
          </RegisterContainer>
        </Box>
      </Container>
    );
  }
}

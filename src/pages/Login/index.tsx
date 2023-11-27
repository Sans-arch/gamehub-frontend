import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Container, Box, LoginButton, RegisterButton, RegisterContainer, RegisterSidebar, Form } from './styles';
import logo from '../../assets/logo/logo-white-removebg-preview.png';
import { AuthContext } from '@/src/contexts/auth';
import { NotificationSnackbar } from '@/src/components/NotificationSnackbar';

const createUserFormSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email format').toLowerCase(),
  password: z.string(),
});

type LoginUserFormData = z.infer<typeof createUserFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const { signIn, signed } = useContext(AuthContext);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSignIn: SubmitHandler<FieldValues> = async data => {
    const { email, password } = data as LoginUserFormData;

    if (email && password) {
      try {
        await signIn(data.email, data.password);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            const { error: message } = error.response.data;
            setSnackbarMessage(message);
            setIsSnackbarOpen(true);
          }
        }
      }
    }
  };

  function handleClose() {
    setIsSnackbarOpen(false);
  }

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
            <h1>Welcome to GameHub!</h1>
            <p>Create your account here!</p>
            <Link to="/register">
              <LoginButton>Sign up</LoginButton>
            </Link>
          </RegisterSidebar>

          <RegisterContainer>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit(handleSignIn)}>
              <div>
                <input {...register('email')} type="email" placeholder="Email" className={errors.email && 'invalid'} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  className={errors.password && 'invalid'}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <RegisterButton type="submit">Enter</RegisterButton>
            </Form>
          </RegisterContainer>
        </Box>

        {isSnackbarOpen && (
          <NotificationSnackbar
            type="error"
            message={snackbarMessage}
            isSnackbarOpen={isSnackbarOpen}
            handleClose={handleClose}
          />
        )}
      </Container>
    );
  }
}

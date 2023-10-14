import { AxiosError, AxiosResponse } from 'axios';
import { Alert, Snackbar } from '@mui/material';
import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hashSync, genSaltSync } from 'bcryptjs';
import { useForm } from 'react-hook-form';

import { Container, Dialog, LoginButton, LoginSidebar, RegisterButton, RegisterContainer } from './styles';

import logo from '../../assets/logo/logo-white-removebg-preview.png';
import apiCaller from '../../services/api';
import { SubmitNewUserError } from './types';

export function RegisterLayout() {
  const { register, handleSubmit } = useForm();

  // const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  // const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  // const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  function handleSignIn(data: any) {
    console.log(data);
  }

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const salt = genSaltSync(10);

  //   const userInfo = {
  //     name,
  //     email,
  //     password: hashSync(password, salt),
  //   };

  //   apiCaller
  //     .post('/auth/register', userInfo)
  //     .then((response: AxiosResponse) => {
  //       if (response.status === 201) {
  //         handleSuccessSnackbar();
  //         resetFormFields();
  //       }
  //     })
  //     .catch((error: AxiosError) => {
  //       const errorData = error.response?.data as SubmitNewUserError;
  //       setSubmitErrorMessage(errorData.message);
  //       handleErrorSnackbar();
  //     });
  // }

  // function handleSuccessSnackbar(event?: React.SyntheticEvent | Event, reason?: string) {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpenSuccessSnackbar(prevState => !prevState);
  // }

  // function handleErrorSnackbar(event?: React.SyntheticEvent | Event, reason?: string) {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpenErrorSnackbar(prevState => !prevState);
  // }

  return (
    <Container>
      <Dialog>
        <LoginSidebar>
          <Image src={logo.src} alt="Logo" width={176} height={181} />
          <h1>Bem-vindo de volta!</h1>
          <p>Acesse sua conta agora mesmo!</p>
          <Link href="/login">
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

      {/* <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleSuccessSnackbar}
      >
        <Alert onClose={handleSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
          Usuário criado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleErrorSnackbar}
      >
        <Alert onClose={handleErrorSnackbar} severity="error" sx={{ width: '100%' }}>
          {submitErrorMessage}
        </Alert>
      </Snackbar> */}
    </Container>
  );
}

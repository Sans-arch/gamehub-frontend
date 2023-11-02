import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import apiCaller from '../services/api';
import { SignInResponse, User } from './types';

type LoginParamsProps = {
  login: string;
  password: string;
};

export function useAuth() {
  // const signIn = useSignIn();

  const login = async ({ login, password }: LoginParamsProps) => {
    try {
      const response = await apiCaller.post('/auth/login', { email: login, password });

      console.log({ response });

      const { token }: SignInResponse = response.data;
      // signIn({
      //   token: token,
      //   expiresIn: 3600,
      //   tokenType: 'Bearer',
      //   authState: {
      //     email: login,
      //   },
      // });

      apiCaller.defaults.headers['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Erro ao fazer login: ', error);
    }
  };

  async function logout() {
    try {
      const { 'gamehub-token': token } = parseCookies();

      await apiCaller.post('/auth/logout', { token });
      destroyCookie(null, 'gamehub-token');
      delete apiCaller.defaults.headers['Authorization'];
    } catch (error) {
      console.error('Erro ao fazer logout: ', error);
    }
  }

  useEffect(() => {
    const { 'gamehub-token': token } = parseCookies();

    if (token) {
      try {
        // const decodedToken = jwt.decode(token);
        // Verifique a validade do token (por exemplo, a data de expiração)
        apiCaller
          .post('/auth/verify', { token })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            // Token expirado, faça logout
            destroyCookie(null, 'gamehub-token');
            delete apiCaller.defaults.headers['Authorization'];
          });
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  return {
    login,
    logout,
  };
}

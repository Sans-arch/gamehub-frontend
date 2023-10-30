import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

import apiCaller from '../services/api';
import { AuthContextType, RetrieveUserResponse, SignInResponse, User } from '../hooks/types';

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { 'gamehub-token': token } = parseCookies();

    if (token) {
      apiCaller
        .post('/auth/retrieve', { token })
        .then(response => {
          const { user } = response.data as RetrieveUserResponse;

          setUser({
            email: user.email,
            name: user.name,
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  async function checkIsAuthenticated() {
    const { 'gamehub-token': token } = parseCookies();

    if (token) {
      return true;
    }

    return false;
  }

  async function signIn(email: string, password: string) {
    const response = await apiCaller.post('/auth/login', {
      email,
      password,
    });

    const { token, user } = response.data as SignInResponse;

    setCookie(undefined, 'gamehub-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser({
      name: user.name,
      email: user.email,
    });

    apiCaller.defaults.headers['Authorization'] = `Bearer ${token}`;

    router.push('/');
  }

  async function logout() {
    try {
      const { 'gamehub-token': token } = parseCookies();
      await apiCaller.post('/auth/logout', { token });

      destroyCookie(null, 'gamehub-token');

      delete apiCaller.defaults.headers['Authorization'];

      router.push('/login');
    } catch (error) {
      console.log('Erro ao fazer logout: ', error);
    }
  }

  return <AuthContext.Provider value={{ user, checkIsAuthenticated, signIn, logout }}>{children}</AuthContext.Provider>;
}

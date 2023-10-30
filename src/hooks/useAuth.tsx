import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { useState } from 'react';
import apiCaller from '../services/api';
import { SignInResponse, User } from './types';

type LoginParamsProps = {
  login: string;
  password: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const login = async ({ login, password }: LoginParamsProps) => {
    try {
      const response = await apiCaller.post('/auth/login', { login, password });

      const { token, user }: SignInResponse = response.data;

      setUser(user);
      setCookie(undefined, 'gamehub-token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      apiCaller.defaults.headers['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Erro ao fazer login: ', error);
    }
  };

  const logout = async () => {
    try {
      const { 'gamehub-token': token } = parseCookies();

      await apiCaller.post('/auth/logout', { token });
      destroyCookie(null, 'gamehub-token');
      delete apiCaller.defaults.headers['Authorization'];

      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout: ', error);
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
}

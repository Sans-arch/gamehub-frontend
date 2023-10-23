import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/router';

import apiCaller from '../services/api';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
};

type SignInResponse = {
  token: string;
  user: {
    email: string;
    name: string;
  };
};

type RetrieveUserResponse = {
  user: {
    email: string;
    name: string;
  };
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'gamehub-token': token } = parseCookies();

    if (token) {
      apiCaller
        .post('/auth/retrieve', {
          token,
        })
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

  return <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>{children}</AuthContext.Provider>;
}

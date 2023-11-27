import { createContext, useMemo, useState } from 'react';
import apiCaller from '../services/api';
import { Navigate } from 'react-router-dom';

type User = {
  id: number;
  email: string;
  name: string;
};

export interface AuthContextProps {
  user: User | null;
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): JSX.Element;
  signUp(name: string, email: string, password: string): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storageUser = localStorage.getItem('@Auth:user');

    if (storageUser) {
      return JSON.parse(storageUser);
    }

    return null;
  });

  const authContextValue = useMemo(() => {
    const signIn = async (email: string, password: string) => {
      const response = await apiCaller.post('/auth/login', { email, password });

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        apiCaller.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        localStorage.setItem('@Auth:token', response.data.token);
        localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
      }
    };

    const signOut = () => {
      localStorage.removeItem('@Auth:user');
      localStorage.removeItem('@Auth:token');
      setUser(null);
      return <Navigate to="/" />;
    };

    const signUp = async (name: string, email: string, password: string) => {
      const response = await apiCaller.post('/auth/register', { name, email, password });

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        apiCaller.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        localStorage.setItem('@Auth:token', response.data.token);
        localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
      }
    };

    return { user, signed: !!user, signIn, signOut, signUp };
  }, [user]);

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

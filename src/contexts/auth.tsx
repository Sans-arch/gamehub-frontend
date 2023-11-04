import { createContext, useState } from 'react';
import apiCaller from '../services/api';
import { Navigate } from 'react-router-dom';

interface AuthContextProps {
  user: string | null;
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): JSX.Element;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(() => {
    const storageUser = localStorage.getItem('@Auth:user');

    if (storageUser) {
      return JSON.parse(storageUser);
    }

    return null;
  });

  const signIn = async (email: string, password: string) => {
    const response = await apiCaller.post('/auth/login', { email, password });

    if (response.data.error) {
      alert(response.data.error);
    } else {
      setUser(response.data.user);
      apiCaller.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem('@Auth:token', JSON.stringify(response.data.token));
      localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
    }
  };

  const signOut = () => {
    localStorage.removeItem('@Auth:user');
    localStorage.removeItem('@Auth:token');
    setUser(null);
    return <Navigate to="/" />;
  };

  return <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

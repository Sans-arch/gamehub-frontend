export type User = {
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  checkIsAuthenticated: () => Promise<boolean>;
  logout: () => Promise<void>;
};

export type SignInResponse = {
  token: string;
  user: User;
};

export type RetrieveUserResponse = {
  user: {
    email: string;
    name: string;
  };
};

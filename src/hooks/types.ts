export type User = {
  name: string;
  email: string;
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

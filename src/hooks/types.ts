export type User = {
  name: string;
  email: string;
};

export type SignInResponse = {
  token: string;
};

export type RetrieveUserResponse = {
  user: {
    email: string;
    name: string;
  };
};

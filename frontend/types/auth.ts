import { User } from "./user";

export type SignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  user: string;
  token: string;
};

export type AuthContextType = {
  userIsAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

import create from "zustand";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";

import { SignInData } from "../types/auth";

import { signInRequest } from "../services/auth";
import { api } from "../services/api";

interface AuthState {
  userIsAuthenticated: boolean;
  signIn: ({ email, password }: SignInData) => Promise<void>;
  signOut: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  userIsAuthenticated: false,
  signIn: async ({ email, password }) => {
    const { token, user } = await (
      await signInRequest({ email, password })
    ).json();

    if (token !== undefined) {
      setCookie(undefined, "twdo.token", token, {
        maxAge: 3600,
      });

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      set(() => ({
        userIsAuthenticated: true,
      }));

      Router.push("/user-settings");
    }
  },
  signOut: () => {
    set((state) => {
      if (state.userIsAuthenticated) {
        destroyCookie(null, "twdo.token");
      }
      return {
        userIsAuthenticated: true,
      };
    });

    Router.push("/sign-in");
  },
}));

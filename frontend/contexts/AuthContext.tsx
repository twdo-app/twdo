import React, { createContext, ReactElement, useEffect, useState } from "react";
import Router from "next/router";

import { parseCookies, setCookie } from "nookies";

import { api } from "../services/api";
import { signInRequest } from "../services/auth";
import { AuthContextType, SignInData } from "../types/auth";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  useEffect(() => {
    const { "twdo.token": token } = parseCookies();
    setUserIsAuthenticated(token ? true : false);
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await (
      await signInRequest({ email, password })
    ).json();

    if (token !== undefined) {
      setCookie(undefined, "twdo.token", token, {
        maxAge: 3600,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUserIsAuthenticated(true);

      Router.push("/today");
    }
  }

  return (
    <AuthContext.Provider value={{ userIsAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

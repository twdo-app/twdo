import { SignInData } from "../types/auth";

export async function signInRequest(data: SignInData) {
  return fetch("http://localhost:4001/users/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
}

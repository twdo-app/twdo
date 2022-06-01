import axios, { HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "twdo.token": token } = parseCookies(ctx);

  interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
  }

  const api = axios.create({
    baseURL: "http://localhost:4001",
  });

  if (token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as CommonHeaderProperties;
  }

  return api;
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "next-themes";

export default function MyApp({
  Component,
  pageProps: { session, theme, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import Modal from "../components/common/Modal";

export default function MyApp({
  Component,
  pageProps: { session, theme, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
        <Modal />
      </AuthProvider>
    </ThemeProvider>
  );
}

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import Modal from "../components/common/Modal";
import { useEffect } from "react";

export default function MyApp({
  Component,
  pageProps: { theme, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Modal />
    </ThemeProvider>
  );
}

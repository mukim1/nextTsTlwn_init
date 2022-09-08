import "../styles/globals.css";
import type { AppProps } from "next/app";
import GContext from "../Contexts/GContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GContext>
      <Component {...pageProps} />
    </GContext>
  );
}

export default MyApp;

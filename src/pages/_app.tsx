import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { TaskProvider } from "../context/TaskContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;

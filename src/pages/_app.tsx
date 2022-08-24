import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyles } from "../theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

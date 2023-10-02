import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { Layout } from "../components/Home/Layout";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Layout />
    </ThemeProvider>
  );
}

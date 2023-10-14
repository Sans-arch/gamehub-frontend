import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';
import { HomeLayout } from '../components/Home';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <HomeLayout />
    </ThemeProvider>
  );
}

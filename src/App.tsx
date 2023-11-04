import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { AuthProvider } from './contexts/auth';
import { AppRouter } from './routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

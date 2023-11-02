import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Home from '@pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

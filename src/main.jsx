import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
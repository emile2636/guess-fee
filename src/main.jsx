import React from 'react';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import theme from './theme';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

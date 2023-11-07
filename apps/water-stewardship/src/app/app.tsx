import { RouterProvider } from 'react-router-dom';

import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

import router from './routes';

export function App() {
  return (
    <CssVarsProvider>
      <GlobalStyles
        styles={{
          svg: {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '0.75em',
            height: '0.75em',
          },
        }}
      />
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;

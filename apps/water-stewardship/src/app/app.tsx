import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Home from './routes/home';

export function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Home />
    </CssVarsProvider>
  );
}

export default App;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme, Theme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
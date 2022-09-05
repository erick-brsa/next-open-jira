import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme, Theme } from '@mui/material';
import { CssBaseline } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
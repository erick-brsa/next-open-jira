import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { EntriesProvider, UIProvider } from '../context';
import { lightTheme, darkTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider>
			<EntriesProvider>
				<UIProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</UIProvider>
			</EntriesProvider>
		</SnackbarProvider>
	);
}

export default MyApp;

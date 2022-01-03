import { AppProps } from 'next/app';

import { Provider } from 'reakit';

import { ThemeProvider } from '~/components/Theme/ThemeProvider';

import '~/styles/globals.css';
import '~/styles/line-md.css';

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);

export default MyApp;

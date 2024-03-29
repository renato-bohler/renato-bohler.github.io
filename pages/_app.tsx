import '~/styles/globals.css';
import 'normalize.css';

import { type FC } from 'react';

import { type AppProps } from 'next/app';

import { Provider } from 'reakit/Provider';

import { AnalyticsScript } from '~/components/AnalyticsScript/AnalyticsScript';
import { ThemeProvider } from '~/components/Theme/ThemeProvider';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
    <AnalyticsScript />
  </>
);

export default App;

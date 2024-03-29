import '~/styles/globals.css';
import 'normalize.css';

import { AppProps } from 'next/app';

import { Provider } from 'reakit/Provider';

import { AnalyticsScript } from '~/components/AnalyticsScript/AnalyticsScript';
import { ThemeProvider } from '~/components/Theme/ThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
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

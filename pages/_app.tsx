import 'normalize.css';
import '~/styles/globals.css';

import { AppProps } from 'next/app';

import { Provider } from 'reakit/Provider';

import { ThemeProvider } from '~/components/Theme/ThemeProvider';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);

export default App;

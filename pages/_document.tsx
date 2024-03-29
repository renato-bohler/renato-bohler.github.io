import { type ReactElement } from 'react';

import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html itemScope itemType="https://schema.org/WebPage" lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en" itemScope itemType="https://schema.org/WebPage">
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

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#f4f4f5" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
          <link rel="apple-touch-icon" href="/images/icon-maskable-512.png" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="bg-bgFull text-textNormal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

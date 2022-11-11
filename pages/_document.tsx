import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Nav */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          />
        </Head>
        <body className="selection:bg-brandOrange selection:text-darkBG">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

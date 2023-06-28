import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.10.4/viewer.min.css"
            integrity="sha512-OgbWuZ8OyVQxlWHea0T9Bdy1oDhs380WxLMaLZbuitQ/mdntHBPnApxbTebB9N5KoHZd3VMkk3G2cTY563nu5w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link rel="stylesheet" href="/fonts/product-sans/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

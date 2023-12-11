import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="#E88B88" name="theme-color" />
        <meta content="summary" name="twitter:card" />
        <meta content="/img/thumbnail.png" property="og:image" />
        <meta content="Mochi UI" property="og:site_name" />
        <meta content="Mochi UI" property="og:title" />
        <meta
          content="Beautiful and accessible React UI library for building web3 application"
          name="description"
        />

        <link href="/img/logo.png" rel="icon" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

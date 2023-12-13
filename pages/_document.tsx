import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#E88B88" />
        <meta
          name="description"
          content="Stunning and accessible React UI library for web3 application!"
        />
        <meta
          name="keywords"
          content="accessible, beautiful, ui, ui library, mochiui, radix ui"
        />

        <meta name="twitter:title" content="Mochi UI Kit" />
        <meta
          name="twitter:description"
          content="Stunning and accessible React UI library for web3 application!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content="/img/thumbnail.png" />

        <meta property="og:title" content="Mochi UI Kit" />
        <meta property="og:site_name" content="Mochi UI Kit" />
        <meta property="og:image" content="/img/thumbnail.png" />
        <meta
          property="og:description"
          content="Stunning and accessible React UI library for web3 application!"
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

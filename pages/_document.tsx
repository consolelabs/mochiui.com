import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1DA1F2" />
        <meta name="title" content="Mochi UI Kit" />
        <meta
          name="description"
          content="Stunning and accessible React UI library for web3 application!"
        />
        <meta
          name="keywords"
          content="accessible, beautiful, ui, ui library, mochiui, radix ui"
        />

        {/* Social network */}
        <meta property="twitter:title" content="Mochi UI Kit" />
        <meta
          property="twitter:description"
          content="Stunning and accessible React UI library for web3 application!"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mochiui.com" />
        <meta property="twitter:image" content="/img/thumbnail.png" />

        {/* OG */}
        <meta property="og:title" content="Mochi UI Kit" />
        <meta
          property="og:description"
          content="Stunning and accessible React UI library for web3 application!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mochiui.com" />
        <meta property="og:image" content="/img/thumbnail.png" />

        <link href="/img/logo.png" rel="icon" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

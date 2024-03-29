import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
      </Head>

      <body className='bg-black overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="description"
          content="Jeremy Neander is a software engineer working to build a better, more accessible web."
        />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,800italic,300,400,700,800"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:300italic,400italic,700italic,300,400,700"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400italic,700,700italic"
          rel="stylesheet"
        />

        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}

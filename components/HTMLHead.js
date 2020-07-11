import Head from 'next/head'

export default function HTMLHead({ title = 'Poem Generator' }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/apple-touch-icon.png"
      />
    </Head>
  )
}
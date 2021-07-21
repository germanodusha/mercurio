import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

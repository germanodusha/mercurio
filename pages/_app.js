import Head from 'next/head'
import playlists from '@/data/playlists'
import '../styles/globals.css'
import '../styles/main.scss'

const srcs = playlists.flat(2).map((track) => `musics/${track.src}`)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {srcs.map((src) => (
          <link
            key={src}
            rel="prefetch"
            as="audio"
            type="audio/mp3"
            href={src}
          />
        ))}
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import Head from 'next/head'
import playlists from '@/data/playlists'

const srcs = playlists.flat(2).map((track) => `musics/${track.src}`)

const head = {
  title: 'mercúrio [m/fm]',
  description:
    'independent station / general observatory of empirical studies on musical elasticity and deformity. created by vitor araújo, 2021.',
  image: '/mercurio.png',
}

const Header = () => {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta property="og:title" content={head.title} />
      <meta property="og:description" content={head.description} />
      <meta property="og:image" content={head.image} />

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
        <link key={src} rel="prefetch" as="audio" type="audio/mp3" href={src} />
      ))}
    </Head>
  )
}

export default Header

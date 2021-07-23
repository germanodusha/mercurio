import Header from '@/components/header'
import '@/styles/globals.css'
import '@/styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

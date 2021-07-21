import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}

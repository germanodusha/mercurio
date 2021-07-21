import { useState } from 'react'
import Player from '@/components/player'
import Intro from '@/components/intro'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  const [isReady, setReady] = useState(false)

  return (
    <div className={styles.container}>
      {isReady ? <Player /> : <Intro onClick={() => setReady(true)} />}
    </div>
  )
}

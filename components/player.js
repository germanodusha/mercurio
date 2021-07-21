import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Player.module.scss'

const Player = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['player']}>
        <span>mercurio.live</span>

        <div className={styles['player__wrapper']}>
          <span className={styles['player__select']}>select track</span>

          <div className={styles['player__track']}>
            <span>fix 0.01</span>
            <span>jls</span>
            <span>m-i. lt post-studies</span>
            <span>toque n.2 remix</span>
            <span>vitor araújo</span>
          </div>

          <div className={styles['player__visualizer']}>.</div>

          <div className={styles['player__links']}>
            <Link href="/">
              <a>
                <Image
                  alt="Mercurio official store molett"
                  src="/mercurio_store.png"
                  objectFit="contain"
                  width={679}
                  height={588}
                />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Image
                  alt="M FM"
                  src="/mfm.png"
                  objectFit="contain"
                  width={663}
                  height={474}
                />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Image
                  alt="Bandcamp"
                  src="/bandcamp.png"
                  objectFit="contain"
                  width={664}
                  height={169}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Player

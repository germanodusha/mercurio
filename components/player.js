import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import playlists from '@/data/playlists'
import Modal from '@/components/modal'
import styles from '@/styles/Player.module.scss'

const Player = () => {
  const [showModal, setShowModal] = useState(false)
  const [playing, setPlaying] = useState({ playlistIndex: 0, trackIndex: 0 })
  const onToggleModal = () => setShowModal((value) => !value)
  const track = playlists?.[playing.playlistIndex]?.[playing.trackIndex]
  const onEnded = (e) => console.warn('onEnded', e)
  const onClose = () => setShowModal(false)

  const onSelectTrack = ({ playlistIndex, trackIndex }) => {
    setPlaying({ playlistIndex, trackIndex })
    setShowModal(false)
  }

  return (
    <main className={styles['main']}>
      <div className={styles['player']}>
        <div className={styles['player__logo']}>
          <Image
            alt="Mercúrio logo"
            src="/mercurio-logo.png"
            width={222}
            height={327}
          />
        </div>

        <div className={styles['player__wrapper']}>
          <div className={styles['player__wrapper__info']}>
            <span className="mobile-only">mercurio.live</span>

            <span onClick={onToggleModal} className={styles['player__select']}>
              select track
            </span>

            <div className={styles['player__track']}>
              {track?.descriptions?.map((description, i) => (
                <span key={i}>{description}</span>
              ))}
            </div>

            <div className={styles['player__visualizer']}>
              <audio autoPlay src="/test.mp3" onEnded={onEnded} />
            </div>

            <span className="desktop-only">mercurio.live</span>
          </div>

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

      <Modal
        show={showModal}
        selected={playing}
        onClose={onClose}
        onSelect={onSelectTrack}
      />
    </main>
  )
}

export default Player

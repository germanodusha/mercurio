import { useRef, useMemo, useState } from 'react'
import styles from '@/styles/Visualizer.module.scss'

const Visualizer = ({ track, onEnded }) => {
  const [animate, setAnimate] = useState(true)

  const audio = useRef(null)

  const bars = useMemo(() => Array.from({ length: 60 }, (_, i) => i), [])

  const onTogglePlay = () => {
    if (!audio.current) return

    if (audio.current.paused) {
      audio.current.play()
      setAnimate(true)
    } else {
      audio.current.pause()
      setAnimate(false)
    }
  }

  return (
    <>
      <audio
        autoPlay
        ref={audio}
        src={`musics/${track.src}`}
        onEnded={onEnded}
      />

      <div className={styles['visualizer__wrapper']}>
        <div className={styles['visualizer']}>
          {bars.map((bar) => (
            <span
              key={bar}
              className={!animate ? styles['visualizer__paused'] : {}}
            />
          ))}
        </div>
      </div>

      <div className={styles['visualizer__controls']}>
        <div
          className={styles['visualizer__controls__button']}
          onClick={onTogglePlay}
        >
          {audio.current?.paused ? 'PLAY STREAM' : 'PAUSE STREAM'}
        </div>
      </div>
    </>
  )
}

export default Visualizer

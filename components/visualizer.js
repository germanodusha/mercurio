import { useMemo } from 'react'
import styles from '@/styles/Visualizer.module.scss'

const Visualizer = ({ track, onEnded }) => {
  const bars = useMemo(() => Array.from({ length: 60 }, (_, i) => i), [])

  return (
    <>
      <audio autoPlay src={`musics/${track.src}`} onEnded={onEnded} />
      <div className={styles['visualizer']}>
        {bars.map((bar) => (
          <span key={bar} />
        ))}
      </div>
    </>
  )
}

export default Visualizer

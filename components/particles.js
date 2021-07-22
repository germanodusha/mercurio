import { useMemo } from 'react'
import styles from '@/styles/Particles.module.scss'

const Particles = () => {
  const particles = useMemo(() => Array.from({ length: 100 }, (_, i) => i), [])

  return (
    <div className={styles['container']}>
      {particles.map((id) => (
        <div key={id} className={styles['circle-container']}>
          <div className={styles['circle']} />
        </div>
      ))}
    </div>
  )
}

export default Particles

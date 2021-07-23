import Image from 'next/image'
import styles from '@/styles/Intro.module.scss'

const Intro = ({ progress, onClick }) => {
  return (
    <div className={styles['intro']} onClick={onClick}>
      <div className={styles['intro__logo']}>
        <Image
          alt="Mercúrio logo"
          src="/mercurio-logo.png"
          width={222}
          height={327}
        />
      </div>

      <span>{progress < 100 ? `${progress} %` : 'Enter - Entrar'}</span>
    </div>
  )
}

export default Intro

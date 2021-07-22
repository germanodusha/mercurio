import Scrollbars from 'react-custom-scrollbars'
import playlists from '@/data/playlists'
import styles from '@/styles/Modal.module.scss'

const Modal = ({ show, onClose, onSelect, selected = {} }) => {
  if (!show) return null

  const getTrackClass = (playlistIndex, trackIndex) =>
    selected.playlistIndex === playlistIndex &&
    selected.trackIndex === trackIndex
      ? styles['modal__track-selected']
      : ''

  return (
    <div className={styles['modal']} onClick={onClose}>
      <Scrollbars
        autoHide
        universal
        className={styles['modal__inner']}
        onClick={(e) => e.stopPropagation()}
      >
        {playlists?.map((playlist, playlistIndex) => (
          <div key={playlistIndex} className={styles['modal__playlist']}>
            {playlist?.map((track, trackIndex) => (
              <span
                key={trackIndex}
                onClick={() => onSelect({ playlistIndex, trackIndex })}
                className={getTrackClass(playlistIndex, trackIndex)}
              >
                {track.shortDescription}
              </span>
            ))}
          </div>
        ))}
      </Scrollbars>
    </div>
  )
}

export default Modal

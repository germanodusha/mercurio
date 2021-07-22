/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react'
import Player from '@/components/player'
import Intro from '@/components/intro'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  const image = useRef(null)
  const [progress, setProgress] = useState(0)
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    function loadImage(imageUrl, onprogress) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const notifiedNotComputable = false

        xhr.open('GET', imageUrl, true)
        xhr.responseType = 'arraybuffer'

        xhr.onprogress = function (ev) {
          if (ev.lengthComputable) {
            onprogress(parseInt((ev.loaded / ev.total) * 100))
          } else {
            if (!notifiedNotComputable) {
              notifiedNotComputable = true
              onprogress(-1)
            }
          }
        }

        xhr.onloadend = function () {
          if (!xhr.status.toString().match(/^2/)) {
            reject(xhr)
          } else {
            if (!notifiedNotComputable) {
              onprogress(100)
            }

            const options = {}
            const headers = xhr.getAllResponseHeaders()
            const m = headers.match(/^Content-Type\:\s*(.*?)$/im)

            if (m && m[1]) options.type = m[1]

            const blob = new Blob([this.response], options)
            const src = window.URL.createObjectURL(blob)

            resolve(src)
          }
        }

        xhr.send()
      })
    }

    loadImage('/background.gif', setProgress).then(
      (src) => (image.current.src = src)
    )
  }, [])

  return (
    <div className={styles.container}>
      <img alt="" className={styles['container__background']} ref={image} />

      {isReady ? (
        <Player />
      ) : (
        <Intro progress={progress} onClick={() => setReady(true)} />
      )}
    </div>
  )
}

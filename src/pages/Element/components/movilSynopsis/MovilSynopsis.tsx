import {Datum} from '../../../../types/typeTopAnime'
import styles from './movilSynopsis.module.css'
import {useState} from 'react'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const MovilSynopsis = ({anime, element}: Prop) => {
  const [readMore, setReadMore] = useState<boolean>(false)

  return (
    <div className={readMore ?styles.movilSynopsisOpen :styles.movilSynopsis}>
      <div className={styles.synopsis}>
        <h2>Synopsis</h2>
        <p>{anime?.synopsis}</p>
      </div>
      
      { 
      anime?.background
      ? <div className={styles.background}>
          <h2>Background</h2>
          <p>{anime?.background}</p>
        </div>
      : null
      }

      <div className={styles.readMore} style={readMore ?{position: 'static', padding: '0'} :{}}>
        <button onClick={() => setReadMore(!readMore)}>
          {
            readMore
            ? 'Close'
            : 'Read more'
          }
        </button>
      </div>
    </div>
  )
}

export default MovilSynopsis
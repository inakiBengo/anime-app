import styles from './synopsis.module.css'
import {Datum} from '../../../../types/typeTopAnime'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const Synopsis = ({anime}: Prop) => {

  return (
    <div className={styles.synopsis}>
      {
      anime?.synopsis
        ?
      <div>
        <h2>Synopsis</h2>
        <p>{anime?.synopsis}</p>
      </div>
        : null
      }
      { 
        anime?.background
        ? 
      <div>
        <h2>Background</h2>
        <p>{anime?.background}</p>
      </div>
        : null  
      }
    </div>
  )
}

export default Synopsis
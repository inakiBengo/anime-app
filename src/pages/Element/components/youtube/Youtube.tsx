import {Datum} from '../../../../types/typeTopAnime'
import styles from './youtube.module.css'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const Youtube = ({anime, element}: Prop) => {

  return (
    <>
    {
    anime?.trailer
    ? 
    <div className={styles.youtube}>
      <h2>Trailer</h2>
    
      
      <iframe src={`https://www.youtube.com/embed/${anime?.trailer.youtube_id}?rel=0&showInfo=0&enablejsapi=1&playlist=${anime.trailer.youtube_id}`} frameBorder="0"></iframe>
    
    </div>
    :null
    }
    </>
  )
}

export default Youtube
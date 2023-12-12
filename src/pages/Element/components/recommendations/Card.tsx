import {Data} from '../../../../types/typeRecommendations'
import styles from './Recommendations.module.css'

interface Porp {
  recommendation: Data
  element: string | undefined
}

const Card = ({recommendation, element}: Porp) => {

  return (
    <a href={`/element/${element}/${recommendation.entry.mal_id}`} className={styles.entryCard}>
      <div className={styles.image}>
        <img src={recommendation.entry.images.jpg.image_url} alt="recomendation image" />
      </div>
      <div className={styles.text}>
        <p>{recommendation.entry.title}</p>
      </div>
    </a>
  )
}   

export default Card
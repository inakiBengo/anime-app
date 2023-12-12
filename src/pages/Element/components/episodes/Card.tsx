import { DataEpisodes} from '../../../../types/typeEpisodes'
import styles from './episodes.module.css'

interface Props {
  item: DataEpisodes
}

const Card = ({item}: Props) => {

  const date = new Date(item.aired)
  const aired = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() + 1}`

  return (
    <div className={styles.card}>

      <div className={styles.info}>
        <div className={styles.episodeNumber}>
          {item.mal_id}
        </div>
        <div className={styles.titleAndInfo}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.information}>
            <p>Aired: {aired}</p>
            <p>Score: {item.score}</p>
          </div>
        </div>
      </div>

      <div className={styles.forum}>
        <a href={item.forum_url}>Forum</a>
      </div>

    </div>
  )
}

export default Card
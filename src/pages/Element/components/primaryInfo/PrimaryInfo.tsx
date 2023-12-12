import Stars from '../../../../components/Stars/Stars'
import {Datum} from '../../../../types/typeTopAnime'
import styles from './primaryInfo.module.css'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const PrimaryInfo = ({anime}: Prop) => {

  return (
    <>
    <div className={styles.primaryInfo}>

      <div className={styles.image}>
        <img src={anime?.images.jpg.image_url} alt="" />
      </div>

      <div className={styles.info}>
        <div className={styles.text}>

          <div className={styles.stars}>
            <Stars stars={anime?.score}/>
            <p>({anime?.scored_by} users)</p>
          </div>

          <p className={styles.rank}>Ranked: <span>#{anime?.rank}</span></p>

          <div className={styles.favorites}>
            <i className="bi bi-heart-fill"></i>
            <p>{anime?.favorites}</p>
          </div>

        </div>
        <a href={anime?.url} className={styles.animeList} target='_blank'>MyAnimeList</a>
      </div>

    </div>
    </>
  )
}

export default PrimaryInfo
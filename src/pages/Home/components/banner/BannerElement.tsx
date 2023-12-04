import styles from './banner.module.css'
import { Datum } from '../../../../types/typeTopAnime'
import Stars from '../../../../components/Stars/Stars'
import useIntersection from '../../../../hooks/useIntersection'

const BannerElement = (anime: Datum) => {
  const {observerRef, intersecting} = useIntersection()

  return (
    <div className={styles.banner} ref={observerRef as React.RefObject<HTMLDivElement>}>

      <div className={styles.info}>
        <img src={anime.images.jpg.large_image_url} alt="banner image" />
        <div className={styles.text}>
          <p className={styles.title}>{anime.title}</p>
          <div className={styles.genres}>
          {
            anime.genres.map(genre => 
              <span key={genre.mal_id}>{genre.name}</span>  
            )
          }
          </div>
          <p className={styles.broadcast}>Broadcast: {anime.broadcast.string}</p>
          <Stars stars={anime.score} />
        </div>
      </div>

      <div className={styles.image}>
        <div className={styles.background}></div>
        <div className={styles.elementsBackground}>
          {
          intersecting
          ? <iframe className={intersecting ?styles.none :styles.invisible}
          src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}?mute=1&autoplay=1&controls=0&rel=0&showInfo=0&enablejsapi=1&playlist=${anime.trailer.youtube_id}&loop=1x`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          : <img className={intersecting ?styles.invisible :styles.none} src={anime.trailer.images.maximum_image_url} alt="banner image previw" />
          }
        </div>
      </div>
    </div>
  )
}

export default BannerElement
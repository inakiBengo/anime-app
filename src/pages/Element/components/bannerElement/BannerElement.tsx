import {Datum} from '../../../../types/typeTopAnime'
import styles from './bannerElement.module.css'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const BannerElement = ({anime, element}: Prop) => {


  return (
    <>
        <div className={styles.banner}>
          {
          element === 'anime'
          ? anime?.trailer.images.maximum_image_url === null
            ? <img src={anime?.images.jpg.large_image_url} alt="" />
            : <img src={anime?.trailer.images.maximum_image_url} alt="" />
          : 
          <img src={anime?.images.jpg.large_image_url} alt="" />
          }
          <p className={styles.id}>#{anime?.mal_id}</p>
        </div>
    </>
  )
}

export default BannerElement
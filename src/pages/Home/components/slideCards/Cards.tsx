import { Datum } from '../../../../types/typeTopAnime'
import style from './slideCards.module.css'

const Cards = (anime: Datum) => {

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={anime.images.jpg.image_url} alt='anime' />
      </div>
      <div className={style.text}>
        <p>{anime.title}</p>
      </div>
    </div>
  )
}

export default Cards
import { Datum } from '../../../../types/typeTopAnime'
import style from './slideCards.module.css'

const Cards = (anime: Datum) => {

  return (
    <a href={`/element/${anime.element}/${anime.mal_id}`} className={style.card}>
      <div className={style.image}>
        <img src={anime.images.jpg.image_url} alt='anime' />
      </div>
      <div className={style.text}>
        <p>{anime.title}</p>
      </div>
    </a>
  )
}

export default Cards
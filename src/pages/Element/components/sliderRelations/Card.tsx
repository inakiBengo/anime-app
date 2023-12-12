import { Loader } from '../../../../components/Loader/Loader'
import useFetch from '../../../../hooks/useFetch'
import {Theme1, typeTopAnime} from '../../../../types/typeTopAnime'
import style from './sliderRelations.module.css'

interface Data {
  data: typeTopAnime | undefined
  loding: boolean
}

interface Relations {
  type: string
  mal_id: number
}

interface Porps {
  item: Relations
  time: number
}

const Card = ({item, time}: Porps) => {
  const {data, loding}: Data = useFetch(`${item.type}/${item.mal_id}`, time)
  const anime = data?.data

  return (
    <>
    {
    loding
    ? 
    <div className={style.loader}><Loader/></div>
    :
    <a href={`/element/${item.type}/${item.mal_id}`} className={style.card}>
      <div className={style.image}>
        <img src={anime?.images.jpg.image_url} alt="" />
      </div>
      <div className={style.text}>
        <p className={style.title}>{anime?.title}</p>
        <p className={style.type}>{anime?.type}</p>
      </div>
    </a>
    }
    </>
  )
}

export default Card
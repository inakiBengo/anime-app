import useFetch from '../../../../hooks/useFetch'
import styles from './cardContainer.module.css'
import {Root, Daum} from '../../../../types/typeGenres'
import { Loader } from '../../../../components/Loader/Loader'
import Card from './Card'

interface Data {
  data: undefined | Root
  loding: boolean
}

const CardContainer = () => {

  const {data, loding}: Data = useFetch('genres/anime')
  console.log(data)
  return (
    <div className={styles.cardContainer}>

      {
        loding
        ? <div className={styles.loader}><Loader/></div>
        : 
        <div className={styles.cardGrid}>
          {
            data?.data.map((genre: Daum) => 
              <Card key={genre.mal_id}  {...genre} path={'anime'}/>
            )
          }
        </div>
      }

    </div>
  )
}

export default CardContainer
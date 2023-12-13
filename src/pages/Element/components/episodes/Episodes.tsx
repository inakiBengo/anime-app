import { useEffect, useState } from "react"
import { Loader } from "../../../../components/Loader/Loader"
import {typeEpisodes, DataEpisodes} from '../../../../types/typeEpisodes'
import Card from "./Card"
import styles from './episodes.module.css'

interface Props {
  mal_id: number
}

const Episodes = ({mal_id}: Props) => {

  const [data, setData] = useState<typeEpisodes>()
  const [loding, setLoding] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)


  const fetching = async () => {
    setLoding(true)
    await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/episodes?page=${page}`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => {console.error(err)})
    setLoding(false)
  }
  console.log(data)
  useEffect(() => {

      fetching()

    }, [page])

  return (
    <>
    {
      data && data?.data.length <= 0
      ?
      <div className={styles.episodesNotFound}>
        <img src="/public/notFound.png" alt="episodes not found" />
        <p>No episodes found</p>
      </div>
      :
      <div className={styles.episodes}>
        <h2>Episodes</h2>
        <div className={styles.pageSelect}>
          {
            [...new Array(data?.pagination.last_visible_page)].map((item, index) => 
                <button 
                style={index+1 === page ?{background: 'var(--color-2)'} :{} } 
                key={index}
                onClick={() => setPage(index+1)}>
                  Page {index+1}
                </button>
              )
          }
        </div>
        {
        loding
        ? <div className={styles.laoder}><Loader/></div>
        :
        <div className={styles.cards}>
          {
            data?.data.map((item: DataEpisodes) => 
              <div key={item.mal_id}>
                <Card item={item}/>
              </div>
            )
          }
        </div>
        }
      </div>
      }
    </>
  )
}

export default Episodes
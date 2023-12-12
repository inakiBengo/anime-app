import useFetch from "../../../../hooks/useFetch"
import {Root, Daum} from '../../../../types/typeReviews'
import Comment from "./Comment"
import styles from './reviews.module.css'

interface Props {
  element: string | undefined
  mal_id: number
  time: number
}

interface Data {
  data: Root | undefined
  loding: boolean
}

const Reviews = ({element, mal_id, time}: Props) => {

  const {data, loding}: Data = useFetch(`${element}/${mal_id}/reviews`, time)
  const review = data?.data

  return (
    <>
      {
        !loding
        ?
        <>
        {
          review?.length > 0
          ?
          <div className={styles.reviews}>
            <h2>Reviews</h2>
            {
            review?.map((item: Daum) => 
                <div key={item.mal_id}>
                  <Comment {...item}/> 
                </div>
              )
            }
          </div>
          : null
        }
        </>
          : <div className={styles.loader}></div>
      }
    </>
  )
}

export default Reviews
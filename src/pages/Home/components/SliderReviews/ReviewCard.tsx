import Stars from '../../../../components/Stars/Stars'
import {Daum} from '../../../../types/typeReviews'
import styles from './sliderReviews.module.css'

const ReviewCard = (review: Daum) => {

  const date = new Date(review.date)
  const publicationDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`

  return (
    <div className={styles.ReviewCard}>

      <div className={styles.user}>
        <img src={review.user.images.jpg.image_url} alt="user image" />
        <div className={styles.userText}>
          <p className={styles.title}>{review.user.username}</p>
          <p className={styles.date}>{publicationDate}</p>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.anime}>
          <img src={review.entry.images.jpg.image_url} alt="" />
          <div className={styles.stars}>
            <Stars stars={review.score}/>
          </div>
          <p className={styles.name}>{review.entry.title}</p>
        </div>

        <div className={styles.text}>
          <p>{review.review}</p>
        </div>

      </div>

    </div>
  )
}
export default ReviewCard
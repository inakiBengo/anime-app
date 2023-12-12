import { useState } from 'react'
import {Daum} from '../../../../types/typeReviews'
import styles from './reviews.module.css'

const Comment = (item: Daum) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <img src={item.user.images.jpg.image_url} alt="" />
        <div className={styles.text}>
          <p>{item.user.username}</p>
          <p>2000/11/10</p>
        </div>
        <button onClick={() => setOpen(!open)} className={styles.openButton}>
          {
            open
            ? <><p className={styles.read}>read more</p> <i className="bi bi-caret-up-fill"></i></>
            : <><p className={styles.read}>read less</p><i className="bi bi-caret-down-fill"></i></>
          }
        </button>
      </div>

      <div className={styles.comment} style={open ?{height: 'auto'} :{height: '200px'}}>
        <p className={open ?styles.line_noClamp :styles.line_clamp}>{item.review}</p>
      </div>
    </div>
  )
}

export default Comment
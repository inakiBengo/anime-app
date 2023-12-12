import {dataStaff} from '../../../../types/typeStaff'
import styles from './grid.module.css'

const CardPerson = (item: dataStaff) => {

  // console.log(item)

  return (
    <div className={styles.cardPerson}>
      <div className={styles.image}>
        <img src={item.person.images.jpg.image_url} alt="staff image" />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{item.person.name}</p>
        <p className={styles.position}>{item.positions[0]}</p>
      </div>
    </div>
  )
}
export default CardPerson
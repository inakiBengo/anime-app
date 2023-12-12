import {dataCharacter} from '../../../../types/typeCharacter'
import styles from './grid.module.css'

const CardCharacter = (item: dataCharacter) => {


  return (
    <div className={styles.CardCharacter}>
      <div className={styles.character}>
        <div className={styles.image}>
          <img src={item.character.images.jpg.image_url} alt="Character image" />
        </div>
        <div className={styles.text}>
          <p className={styles.name}>{item.character.name}</p>
          <p className={styles.role}>{item.role}</p>
        </div>
      </div>
    </div>
  )
}

export default CardCharacter
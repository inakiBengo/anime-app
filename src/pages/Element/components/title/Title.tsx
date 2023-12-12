import {Datum} from '../../../../types/typeTopAnime'
import styles from './title.module.css'

interface Prop {
  anime: Datum | undefined
  element: string | undefined
}

const Title = ({anime, element}: Prop) => {

  return (
    <div className={styles.Title}>
      <h1>{anime?.title}</h1>
      <div className={styles.info}>
        {
          element === 'anime'
          ? <p>{anime?.aired.prop.from.year}</p>
          : <p>{anime?.published.prop.from.year}</p>
        }
        <div className={styles.streaming}>
        {
          anime?.streaming
          ? anime?.streaming.map(item => <a href={item.url} key={item.name} target='_blank'>{item.name}</a>)
          : <></>
        }
        </div>
      </div>
    </div>
  ) 
}

export default Title
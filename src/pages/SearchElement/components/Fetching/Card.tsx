import Stars from '../../../../components/Stars/Stars'
import {typeTopAnime, Datum} from '../../../../types/typeTopAnime'
import styles from './fetching.module.css'

interface Props {
  data: typeTopAnime | undefined
  element: string | undefined
}

const Card = ({data, element}: Props) => {

  console.log(data)
  return (  
    <>
    {
      data && data?.data.length > 0
      ?<div className={styles.cards}>
        {
          data?.data.map((item: Datum) =>
          <div className={styles.cardContainer} key={item.mal_id}> 
            <a href={`/element/${element}/${item.mal_id}`} className={styles.card} >

              <div className={styles.info}>
                <div className={styles.image}>
                  <img src={item.images.jpg.image_url} alt={`image ${item.title}`} />
                </div>
                <div className={styles.text}>
                  <p className={styles.title}>{item.title}</p>
                  <div>
                    <Stars stars={item.score}/>
                  </div>
                  {
                    item.type
                    ? <p className={styles.type}>{item.type} <span>({item.episodes !== null ?item.episodes :'-'} episodes)</span> </p>
                    : <p className={styles.type}>N/A</p>
                  }
                  {
                    element === 'anime'
                    ? item.aired.prop.from.year
                      ? <p className={styles.date}>
                          {item.aired.prop.from.year}/{item.aired.prop.from.month}/{item.aired.prop.from.month}
                        </p>
                      : <p className={styles.date}>N/A</p>
                    : item.published.prop.from.year
                      ? <p className={styles.date}>
                          {item.published.prop.from.year}/{item.published.prop.from.month}/{item.published.prop.from.month}
                        </p>
                      : <p className={styles.date}>N/A</p>
                  }
                </div>
              </div>

                 
            </a>  
            <div className={styles.sign}>
              <p>Status: {item.status}</p>
              {element === 'anime' ?<p>Rating: {item.rating}</p> :null}
              <div className={styles.genres}>
                {
                  item.genres.map(item => 
                    <span key={item.mal_id}>{item.name}</span>  
                  )
                }
              </div>
            </div>
           </div>
          )
        }
      </div>
      
      : 
      <div className={styles.notFound}>
        <img src="/public/notFound.png" alt="seach not found" />
        <p>without results</p>
      </div>
    }
    </>
  )
}

export default Card
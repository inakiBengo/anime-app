import { useContext, useEffect } from 'react'
import { SearchContext } from '../../../../context/ContextSearch'
import styles from './filter.module.css'

interface Props {
  data: {
    array: string[]
    name: string
    parametres: string
  }
  element: string | undefined
  typeSearch: string | undefined
}

const SliderFilter = (data: Props) => {
  
  const {fetchingContructor, type, status, rating} = useContext(SearchContext)

  
  useEffect(() => {
  }, [])

  return (
    <div className={styles.animeFilter}>
      
          <h2 className={styles.titleSlider}>{data.data.name}</h2>
          <div className={styles.overflow}>
            {
              data.data.array.map((item: string, index:number) => 
                <button 
                key={index} 
                className={styles.tag} 
                onClick={() => fetchingContructor(data.data.parametres, item)}
                style={[type, status, rating].includes(item) ?{backgroundColor: 'var(--color-4)'} :{}}
                >
                  <span>{item}</span>
                </button>  
              )
            }
          </div>
          

    </div>
  )
} 

export default SliderFilter
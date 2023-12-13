import { useContext, useEffect, useState } from 'react'
import SliderFilter from './SliderFilter'
import styles from './filter.module.css'
import { SearchContext } from '../../../../context/ContextSearch'

interface Props {
  element: string | undefined
  typeSearch: string | undefined
}

interface Anime {
  type: {
    array: string[]
    name: string
    parametres: string
  }
  status: {
    array: string[]
    name: string
    parametres: string
  }
  rating: {
    array: string[]
    name: string
    parametres: string
  }
}

const Filter = ({element, typeSearch}: Props) => {
  const {navigator, type, status, rating} = useContext(SearchContext)

  const anime = {
    type: {
      array: ['tv', 'movie', 'ova', 'special', 'ona', 'music'],
      name: 'Type',
      parametres: 'type'
    },
    status: {
      array: ['airing', 'complete', 'upcoming'],
      name: 'Status',
      parametres: 'status'
    },
    rating: {
      array:['g', 'pg', 'pg13', 'r17', 'r', 'rx'],
      name: 'Rating',
      parametres: 'rating'
    }
  }
  const manga = {
    type: {
      array: ['manga', 'novel', 'lightnovel', 'oneshot', 'doujin', 'manhwa', 'manhua'],
      name: 'Type',
      parametres: 'type'
    },
    status: {
      array: ['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming'],
      name: 'Status',
      parametres: 'status'
    },
    rating: {
      array: [],
      name: '',
      parametres: ''
    }
  }
  const [parametres, setParametres] = useState<Anime>(anime)

  useEffect(() => {
    element === 'anime'
    ? setParametres(anime)
    : setParametres(manga)
  }, [])

  return (
    <>
    <div className={styles.filter}>
      <div className={styles.search}>
        <h2>Filters</h2>

        <button 
        className={styles.filterButton} 
        onClick={() => navigator(element)} 
        disabled={type || status || rating ?false :true}
        style={type || status || rating ?{} :{background: '#7b7b7b'}}>
          <i className="bi bi-funnel-fill"></i> Filter
        </button>

      </div>
      <SliderFilter data={parametres.type} element={element} typeSearch={typeSearch}/>
      <SliderFilter data={parametres.status} element={element} typeSearch={typeSearch}/>

      {
        parametres.rating
        ? <SliderFilter data={parametres.rating} element={element} typeSearch={typeSearch}/>
        : null
      }
    </div>
    </>
  )
}

export default Filter
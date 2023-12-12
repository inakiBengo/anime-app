import { Loader } from '../../../../components/Loader/Loader'
import useFetch from '../../../../hooks/useFetch'
import {dataCharacter} from '../../../../types/typeCharacter'
import {dataStaff} from '../../../../types/typeStaff'
import CardCharacter from './CardCharacter'
import CardPerson from './CardPerson'
import styles from './grid.module.css'

interface Props {
  mal_id: number
  element: string | undefined
  fetch: string
  time: number
}

const TemplateGrid = ({mal_id, element, fetch, time}: Props) => {

  const {data, loding} = useFetch(`${element}/${mal_id}/${fetch}`, time) 
  const info = data?.data

  return (
    <>
    {
    loding
    ? <div className={styles.loader}><Loader/></div>
    :
    <>
    {
    info.length > 0
    ?
    <div className={styles.templateGrid}>
      <h2 className={styles.title}>{fetch}</h2>
      <div className={styles.search}>
        <input type="search" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>  
      <div className={styles.grid}>
        {
          fetch === 'characters'
          ?
          <>{
          info?.map((item: dataCharacter) => 
            <div key={item.character.mal_id} >
              <CardCharacter {...item}/>
            </div>
            )
          }</>
          :
          <>{
          info?.map((item: dataStaff) => 
            <div key={item.person.mal_id} >
              <CardPerson {...item}/>
            </div>
            )
          }</>
        }
      </div>
    </div>
    : null
    }
    </>
    }
    </>
  )
}

export default TemplateGrid
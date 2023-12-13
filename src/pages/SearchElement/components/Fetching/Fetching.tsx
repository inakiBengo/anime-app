import { useEffect, useState } from "react"
import { Loader } from "../../../../components/Loader/Loader"
import Card from "./Card"
import styles from './fetching.module.css'

interface Props {
  element: string | undefined
  typeSearch: string | undefined
}

const Fetching = ({element, typeSearch}: Props) => {
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState()
  const [loding, setLoding] = useState(true)
  const pagination = data?.pagination

  const fetchData = async () => {
    setLoding(true)
    await fetch(`https://api.jikan.moe/v4/${element}?${typeSearch ?typeSearch :''}&page=${page}`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch( err => {
      console.error(err)
    })
    setLoding(false)
  }

  const prevPage = () => {
    pagination.current_page === 1
    ? null
    : setPage(pagination.current_page - 1)
  }

  const nextPage = () => {
    pagination.current_page === pagination.last_visible_page
    ? null
    : setPage(pagination.current_page + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 500)

    return () => clearTimeout(timer)
  }, [page])

  return (
    <div className={styles.fetching}>
      {
        loding
        ? <div className={styles.loader}><Loader/></div>
        :
        <>
        <Card data={data} element={element}/>
        <div className={styles.buttons}>
          <button onClick={() => prevPage()} style={pagination.current_page === 1 ?{backgroundColor: '#7b7b7b'} :{}}>
            Previous page
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <button onClick={() => nextPage()} 
          style={pagination.current_page === pagination.last_visible_page ?{backgroundColor: '#7b7b7b'} :{}}>
            Next page
            <i className="bi bi-caret-right-fill"></i>  
          </button>
        </div>
        </>
      }
    
    </div>
  )
}

export default Fetching
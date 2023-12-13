
import { useContext } from 'react'
import styles from './search.module.css'
import { SearchContext } from '../../../../context/ContextSearch'

interface Props {
  element: string | undefined
  typeSearch: string | undefined
}

const Search = ({element}: Props) => {


  const {fetchingContructor, navigator} = useContext(SearchContext)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    navigator(element)
  }

  return (
    <form className={styles.searchForm} onSubmit={(e) => submit(e)}>
      <input type="search" autoComplete='off' name='search' onChange={(e) => fetchingContructor( 'search', e.target.value)}/>
      <button>
        <i className="bi bi-search"></i>
      </button>
    </form>
  )
}

export default Search
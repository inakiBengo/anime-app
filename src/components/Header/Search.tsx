import 'bootstrap-icons/font/bootstrap-icons.css'
import { useRef, useState} from 'react'

const Search = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setSearchValue]= useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const navigate = (e: React.FormEvent) => {
    e.preventDefault()
    searchValue
    ? window.location.pathname = `search/anime/&q=${searchValue}`
    : null
  } 

  return (
    <>
    <form onSubmit={(e) => navigate(e)}>
      <input 
      ref={inputRef}
      autoComplete='off' 
      name='search' 
      type="search" 
      style={isSearch ?{width: '100%', opacity: '1'} :{width: '0px', opacity: '0'}}
      onChange={(e) => setSearchValue(e.target.value)}/>
      <button onClick={() => {setIsSearch(true), inputRef.current?.focus() }}>
        <i className="bi bi-search"></i>
      </button>
    </form>
    </>
  )
}

export default Search
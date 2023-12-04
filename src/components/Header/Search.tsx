import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState} from 'react'

const Search = () => {
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <button onClick={() => setIsSearch(true)}>
        <i className="bi bi-search"></i>
      </button>
      <input type="text" style={isSearch ?{width: '170px', opacity: '1'} :{width: '0px', opacity: '0'}}/>
    </>
  )
}

export default Search
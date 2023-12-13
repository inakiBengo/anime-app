import { createContext, useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface SearchContextProps {
  fetchingContructor: Function
  navigator: Function
  type: string
  status: string
  rating: string
  search: string
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps)


export const SearchProvider = ({children}: Props) => {
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [rating, setRating ] = useState('')
  const [search, setSearch] = useState('')

  function fetchingContructor (parametres: string, item: string) {
    parametres === 'type'
    ? item !== type ?setType(item) :setType('')
    : parametres === 'status'
      ? item !== status ?setStatus(item) :setStatus('')
      : parametres === 'rating'
        ? item !== rating ?setRating(item) :setRating('')
        : item !== search ?setSearch(item) :setSearch('')
  }

  const navigator = (element: string) => {
    
    window.location.pathname = `/search/${element}/${search && `&q=${search}`}${type && `&type=${type}`}${status && `&status=${status}`}${rating && `&rating=${rating}`}`
  }

  return (
  <SearchContext.Provider value={{fetchingContructor, navigator, type, status, rating, search}}>
    {children}
  </SearchContext.Provider>
  )
}
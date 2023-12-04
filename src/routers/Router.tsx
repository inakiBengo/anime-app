import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Header from '../components/Header/Header'

const Router = () => {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='search' element={<Search />}/>
      <Route path='/' element={<Navigate to='home'/>}/>
    </Routes>
    </>
  )
}

export default Router
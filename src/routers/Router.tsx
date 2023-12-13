import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Element from '../pages/Element/Element'
import Footer from '../components/Footer/Footer'
import NavigatorMovil from '../components/NavigatorMovil/NavigatorMovil'
import About from '../pages/about/About'
import SearchElement from '../pages/SearchElement/SearchElement'

const Router = () => {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='element/:element/:id' element={<Element />}/>
      <Route path='search/:element' element={<SearchElement />}/>
      <Route path='search/:element/:typeSearch' element={<SearchElement />}/>
      <Route path='/' element={<Navigate to='home'/>}/>
    </Routes>
    <Footer/>
    <NavigatorMovil/>
    </>
  )
}

export default Router
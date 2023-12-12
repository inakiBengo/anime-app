import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Header from '../components/Header/Header'
import Element from '../pages/Element/Element'
import Footer from '../components/Footer/Footer'
import NavigatorMovil from '../components/NavigatorMovil/NavigatorMovil'
import About from '../pages/about/About'

const Router = () => {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='search' element={<Search />}/>
      <Route path='about' element={<About />}/>
      <Route path='element/:element/:id' element={<Element />}/>
      <Route path='/' element={<Navigate to='home'/>}/>
    </Routes>
    <Footer/>
    <NavigatorMovil/>
    </>
  )
}

export default Router
import React from 'react'
import Header from '../common/header/Header'
import Home from '../home/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import Pricing from '../pricing/Pricing'
import Contact from '../contact/Contact'


export default function Pages() {
  return (
    <>
    
    
     <Router> 
    <Header />
    
     
      <Routes>


        <Route path='/'  element={<Home />}/>        
        <Route path='/about'  element={<About />}/> 
        <Route path='/services'  element={<Services />}/> 
        <Route path='/blog'  element={<Blog />}/> 
        <Route path='/pricing'  element={<Pricing />}/> 
        <Route path='/contact'  element={<Contact />}/> 




      </Routes>
    <Footer />
  </Router>
  
    </>
  )
}

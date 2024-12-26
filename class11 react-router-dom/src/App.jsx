import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import About from './Pages/About'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        
      </Routes>
    </div>
  )
}

export default App
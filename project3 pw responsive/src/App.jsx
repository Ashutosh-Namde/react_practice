import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Cards from './components/Cards'
import Card2 from './components/Card2'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-auto bg-black'>
      <Navbar/>
      <Center/>
      <Cards/>
      <Card2/>
      <Footer/>
    
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Cart from './components/cart'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [userData , setUserData] = useState([])
  const [newUserData,setNewUserData] = useState([])

  useEffect(()=>{
    products()
  })

  const products = async()=>{
    const api  = ('https://corsproxy.io/https://fakestoreapi.com/products')
    
    const response = await axios.get(api)
    // console.log(response.data);
    setUserData(response.data)
    
  }
  const clickHandler = (e)=>{
      const cartData = [...newUserData,e]
      
      
// console.log(cartData);
      setNewUserData(cartData)
      
      
}



  return (
    <div>
      <Navbar />
      <div className='flex justify-between'>
      <Cards productsData = {userData} clickHandler = {clickHandler} />
      <Cart  cartData={newUserData}/>
      </div>
    
    </div>
  )
}

export default App
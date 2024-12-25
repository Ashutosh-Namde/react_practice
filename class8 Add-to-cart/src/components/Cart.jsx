/* eslint-disable react/prop-types */
import React from 'react'
import CartCard from './Cartcard'

function Cart({cartData}) {
//  console.log(cartData);
 
  return (
    <div className='h-fit w-full bg-gray-800 p-2'>
       {cartData.map((elem,idx)=>{
        return < CartCard cartData={elem} key={idx} />
       })}
    
     
    </div>
  )
}

export default Cart
/* eslint-disable react/prop-types */
import React from 'react'

function Cartcard({cartData}) {
  // console.log(cartData.id);
  
  return (
    <div className=' bg-white p-2 rounded-lg mb-3'>
    <div className='flex  '>
        <img className='h-32 w-32 rounded-lg bg-emerald-100' src={cartData.image} alt="" />
        <div className='pl-4'>
        <p className='category  font-semibold mt-1'>{cartData.category}</p>
        {/* <p className='description  text-xs opacity-70 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ipsa animi unde.</p> */}
        <h4 className='rating text-sm mt-1'>4.1 259ratting</h4>
        <h4 className='price font-semibold'>$22.3</h4>
        <button className='w-full bg-red-600 mt-2 rounded-lg text-white'>Remove</button>
        </div>
    
    </div>
  
    </div>
  )
}

export default Cartcard
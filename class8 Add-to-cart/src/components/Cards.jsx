/* eslint-disable react/prop-types */
import React from 'react'
import Card from './card'


function Cards({productsData , clickHandler}) {
  return (
    <div className='bg-gray-300'>
    <div className='w-full  flex flex-wrap gap-5 rounded-md '>
       {productsData.map((elem , idx)=>{
        return <Card key={idx} productsData={elem} clickHandler={clickHandler}/>
       })}
       
    </div>
    </div>
  )
}

export default Cards
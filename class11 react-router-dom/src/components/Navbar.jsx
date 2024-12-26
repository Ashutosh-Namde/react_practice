import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 bg-slate-300 p-5'>
        <h1 className='text-3xl font-bold'>Sheryians</h1>
        <div className='flex gap-5'>
            <Link to={'/'}>Home</Link>
            <Link to='/about'>About</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
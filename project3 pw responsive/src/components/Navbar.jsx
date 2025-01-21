import React from 'react'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import Menu from './Menu';


const Navbar = () => {
    const [val, setval] = useState(false)

    const clickHandeler= ()=>{
         setval((e)=>!e)
    }
  return (
    <div className='h-24 w-full  flex items-center justify-between bg-slate-200 p-3 md:p-6'>
        <h1 className='text-3xl font-bold text-indigo-900  '>PW SKILLS</h1>
        <div className='hidden md:flex gap-5'>
            <h4>Home</h4>
            <h4>Contact</h4>
            <h4>Help</h4>
            <h4>Courses</h4>
        </div>
        <button className='hidden md:block'>Login/Sign Up</button>
        <div onClick={clickHandeler} className='text-2xl md:hidden'><IoMdMenu /></div>
       
    </div>
  )
}

export default Navbar
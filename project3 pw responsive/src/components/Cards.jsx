import React from 'react'

const Cards = () => {
  return (
    <div className='h-auto w-full flex items-center justify-between flex-col mt-5 '>
        <h1 className='text-2xl font-bold text-indigo-900 '>Pure Hardwork, No Shortcuts!</h1>
        <h4 className='h-1 w-36 bg-yellow-500'></h4>
        <div className='flex justify-around w-full items-center mt-14 flex-wrap'>
        <div className='font-semibold flex flex-col items-center'>
            <img className='h-24 w-24 rounded-full' src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-white'>600+</h1>
            <h4 className='text-gray-400'>Diffrent Courses</h4>
        </div>
        <div className='font-semibold flex flex-col items-center'>
            <img className='h-24 w-24 rounded-full' src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-white'>700,000+</h1>
            <h4 className='text-gray-400'>Student Enrolled</h4>
        </div>
        <div className='font-semibold flex flex-col items-center'>
            <img className='h-24 w-24 rounded-full' src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-white'>10,000+</h1>
            <h4 className='text-gray-400'>Successful Transaction</h4>
        </div>
        </div>

    </div>
  )
}

export default Cards
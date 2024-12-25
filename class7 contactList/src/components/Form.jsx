/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form'

function Form({formHandlerData}) {
    const {register , handleSubmit} = useForm()
    
  return (
    <div className='h-full w-1/2 bg-white'>
        <form className='p-8' onSubmit={handleSubmit(data => formHandlerData(data))}>
            <h1  className='font-semibold text-xl'>Add Contact</h1>
            <h4 className='mt-2'>Name</h4>
            <input {...register('name')} className='border w-full mt-1 p-1 pl-5' type="text" placeholder='Enter Name' />
            <h4 className='mt-4'>Company</h4>
            <input {...register('company')} className='border w-full mt-1 p-1 pl-5' type="text" placeholder='Enter Company' />
            <h4 className='mt-4'>Phone</h4>
            <input {...register('phone')} className='border w-full mt-1 p-1 pl-5' type="Number" placeholder='Enter Phone' />
            <label  >
                <input {...register('favorate')} className='mt-4' type="checkbox" /> Favorate
            </label>
            <button className='w-full bg-blue-700 py-2 text-white mt-5 rounded-md'> Add Contact</button>
        </form>
    </div>
  )
}

export default Form
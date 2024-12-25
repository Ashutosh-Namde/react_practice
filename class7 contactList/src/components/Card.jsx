/* eslint-disable react/prop-types */


function Card({data}) {
  return (
 
    
    <div className='w-full bg-white p-3 rounded-md mt-6 '>
        
        <h2 className='font-semibold'>{data.name}</h2>
        <h4 className='text-sm opacity-80'>Company:{data.company}</h4>
        <h4 className='text-sm opacity-80'>Phone:{data.phone}</h4> 
        {data.favorate==true &&      <h3 className='text-xs text-white bg-orange-600 w-fit px-4 py-1 mt-1 rounded-full'>Favorate</h3>} 
    </div>
  )
}

export default Card
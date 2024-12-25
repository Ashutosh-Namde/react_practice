/* eslint-disable react/prop-types */


function Card({productsData , clickHandler}) {



  return (
    <div className=' w-60 bg-red-200 p-3 rounded-md'>
        <img  className='h-44  w-full bg-yellow-300 rounded-md m-auto object-cover object-top' src={productsData.image} alt="" />
        <p className='category text-center font-semibold mt-2'>{productsData.category}</p>
        <p className='description text-center text-xs opacity-70 mt-1'>{productsData.description.slice(0,50)}...</p>
        <h4 className='rating text-sm'>4.1 259ratting</h4>
        <h4 className='price font-semibold'>$22.3</h4>
        <button onClick={()=>{clickHandler(productsData)} } className='w-full px-4 bg-blue-600 mt-3 py-1 text-white rounded-lg font-semibold'>Add To Cart</button>
    </div>
  )
}

export default Card
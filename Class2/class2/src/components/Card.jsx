/* eslint-disable react/prop-types */


function Card({values ,handleButton ,index}) {
    const{name,singer,image ,added}=values;
  return (
    <div className='bg-slate-200 w-48 p-2 flex  gap-4 items-start py-2.5 ml-14 rounded mb-12 relative'>
        <div className='imageDiv h-12 w-12 bg-orange-300 rounded mb-2 overflow-hidden'>
            <img className='h-full w-full object-cover object-center' src={image} alt="" />
        </div>
        <div className='name  '>
            <h1 className='font-semibold'>{name}</h1>
            <h2 className='text-xs text-gray-500 font-semibold'>{singer}</h2>
        </div>
        <button onClick={()=>{handleButton(index)}} className={`text-xs px-4 py-2 ${added === false ? "bg-orange-500":"bg-green-700"} text-nowrap text-white rounded-full absolute bottom-0 -translate-x-[50%] left-1/2 translate-y-[50%]`}>{added==false?"Add To Favaraters":"Added"}</button>

    </div>
  )
}

export default Card
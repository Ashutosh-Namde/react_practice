/* eslint-disable react/prop-types */

import Card from './Card'

function Cards({data}) {
  return (
    <div className='h-full w-1/2 bg-gray-400 p-8'>
        <h1 className='text-xl'>Contact List</h1>
        {data.map((elem , idx)=>{
            console.log(elem);
            
            return <Card  key={idx} data={elem}/>
            
            
        })}
    </div>
  )
}

export default Cards
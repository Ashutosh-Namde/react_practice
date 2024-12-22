/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
//  conditional-readering{
//     import React from 'react'


// var data = [
//     {
//         img:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:'Amazone',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea officia? Sed ullam facere mollitia?',
//         inStock:true,
//     },
//     {
//         img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:'Daily product',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea officia? Sed ullam facere mollitia?',
//         inStock:true,
//     },
//     {
//         img:'https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         name:'Apple',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea officia? Sed ullam facere mollitia?',
//         inStock:false, 
//     }

// ]
//  function Card(elem,idx) {
//    return (
//      <div className='h-screen w-full flex items-center justify-center gap-32 bg-gray-700'>
//         {data.map((elem , index)=>(
//             <div className='w-52 bg-slate-300    '>
//             <div className='h-32 w-full object-cover'>
//                 <img src={elem.img} alt="" />
//             </div>
//             <div className='w-full px-4 py-3'>
//                 <h2 className='font-semibold text-lg mt-4'>{elem.name}</h2>
//                 <p className='text-xs mt-2'>{elem.description}</p>
//                 <button className={`py-1 px-4 ${elem.inStock ? "bg-blue-600 " : "bg-red-700"} text-xs rounded mt-3`}>
//                     {elem.inStock ? "In Stock" : "Out of Stock"}
//                 </button>
//             </div>
//             </div>
//         ))}
        
//      </div>
//    )
//  }

//  export default Card
//  }

import React from 'react'

var data = [
    {
        songName : "Mahii Vee",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ipsa. Velit, fugiat."
    },
    {
        songName : "Pahan Ke Chale Bikni",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ipsa. Velit, fugiat."
    },
    {
        songName : "Hook Raja Ji",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ipsa. Velit, fugiat."
    }
]

var download = ()=> {alert("chl raha h")};

function Card() {
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col justify-center items-center gap-4'>
        {data.map((elem , index)=>(
            <div className='px-4 py-2  bg-slate-200 rounded-md  '>
            <div className='song font-semibold text-lg'>{elem.songName}</div>
            <div className='description mt-1 text-xs'>{elem.description}</div>
            <button onClick={download} className='bg-blue-500 px-2 py-1 rounded-full mt-3 text-xs text-white'>Download</button>
        </div>
        ))}
    </div>
  )
}

export default Card

import Navbar from './components/Navbar'
import Card from './components/Card'
import { useState } from 'react'

function App() {
  const data =[
    {
      name:"kabira",
      singer:"Arjjet singh",
      image:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
      added:false,
    },
    {
      name:"Raang sarri",
      singer:"laila jii",
      image:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
      added:false,
    },
    {
      name:"Charkha",
      singer:"Kajal jiii",
      image:"https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      added:false,
    },
    {
      name:"Naina ",
      singer:"Aryan bhai",
      image:"https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      added:false,
    },
    {
      name:"Kajra ree",
      singer:"Khushi",
      image:"https://plus.unsplash.com/premium_photo-1666383632642-96c2118fe011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      added:false,
    },
    {
      name:"kabira",
      singer:"Arjjet singh",
      image:"https://plus.unsplash.com/premium_photo-1675826908256-11d7257ba731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
      added:false,
    },
  ]
 
  const [songData , setSongData] = useState(data)

  const handleButton = (index)=>{
    setSongData((prev)=>{
   return prev.map((item,itemIndex)=>{
    if(index === itemIndex){
      return {...item, added:!item.added}
    }
        return item
      })
    })
  }

  return (
    <div>
      <Navbar data={songData}/>
      <div className='flex flex-wrap '>
      {songData.map((obj ,idx)=>(
         <Card values={obj} key={idx} index={idx} handleButton={handleButton}/>
      ))}
    </div>
    </div>
  )
}

export default App
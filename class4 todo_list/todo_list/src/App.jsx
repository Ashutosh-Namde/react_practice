import { useState } from "react";


function App() {
  const formHandler= (el)=>{
         el.preventDefault();
         const newusers = [...allUsers , {name,description,imageUrl}]
         setallUsers(newusers) 
         
         setName("")
         setDescription("")
         setimageUrl("")
         
  }
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setimageUrl] = useState("")
  
const[allUsers,setallUsers] = useState([])
  

  return (
    <div className="p-10 w-full">
      <form onSubmit={(e)=>{formHandler(e)}}>
        <input 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        type="text" 
        placeholder="Enter Name" 
        className="border px-2 py-1 border-black w-[48%]" />
        <input 
        value={description}
        onChange={(e)=>{setDescription(e.target.value)}}
        type="text" 
        placeholder="Description" 
        className="border px-2 py-1 border-black w-[48%] ml-6" />
        <input 
        value={imageUrl}
        onChange={(e)=>{setimageUrl(e.target.value)}}
        type="text" 
        placeholder="Image Url" 
        className="border px-2 py-1 border-black w-full mt-5"  />
        <button className="px-2 py-1 border border-black mt-5">submit</button>
      </form>
     <div >
      {allUsers.map((elem , idx)=>{

        return <div key={idx} className="w-40 bg-gray-200 text-center">
          <img  className="rounded-full h-24 w-24 object-cover object-center " src={elem.imageUrl} alt="" />
          <h4 className="font-bold ">{elem.name}</h4>
          <h6 className="text-gray-500" >{elem.description}</h6>
        </div>

      })}
     </div>

    </div>
  )
}

export default App
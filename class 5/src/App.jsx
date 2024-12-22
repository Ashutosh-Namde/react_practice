/* eslint-disable react/jsx-key */
import { useState } from "react";


const App = () => {
  const [name , setName] = useState("")
  const [company , setCompany] = useState("")
  const [phone, setPhone]= useState("")
  const[checked,setChecked] = useState(false)
  const [data , setData] = useState([])
  
  const clickHandeler = ()=>{
    const newdata = [...data , {name, company , phone , checked}]
    setData(newdata)
   
    console.log(data);
    // console.log(checked);
    
  }
  const checkBoxChange = (e)=>{
    setChecked(e.target.checked)
    
    
  }
  const formHandeler = (e)=>{
    e.preventDefault();
  
    
    
  }

  return (
    <div className="flex">

      <div className='leftdiv  h-screen w-[50%] bg-gray-300'>
          <form onSubmit={(e)=>{formHandeler(e)}} className="m-5 bg-white h-full p-4">
            <h1 className="pt-6 font-bold">Add Contact</h1>
            <h4 className="mt-3">Name</h4>
            <input 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            type="text" className="pt-1 border w-full border-black" placeholder="Enter Name" />
            <h4 className="mt-3">company Name</h4>
            <input
             value={company}
             onChange={(e)=>{setCompany(e.target.value)}}
            className="pt-1 border w-full border-black" type="text" placeholder="Enter Company"/>
            <h4 className="mt-3">Phone</h4>
            <input
             value={phone}
             onChange={(e)=>{setPhone(e.target.value)}}
            className="pt-1 w-full border border-black" type="Number" placeholder="Enter Number"/>
            <label  className="">
              <input 
              checked={checked}
              onChange={checkBoxChange}
               type="checkbox" 
               /> Favorate
            </label>
            
            <button onClick={clickHandeler} className="w-full py-2 bg-blue-900 text-white mt-10">Add Contact</button>
          </form>

      </div>
  <div className="h-full w-1/2 bg-gray-400 p-5">
  <h1 className="text-2xl">Contact List</h1>
  {data.map((elem , idx)=>{
    return    <div key={idx} className="rightdiv    " >
            
         <div className="card p-5 bg-white rounded-xl  m-5">
         <h1 className="font-semibold text-xl">{elem.name}</h1>
         <h2 className="text-sm text-gray-600">company:  {elem.company}</h2>
         <h2 className="text-sm text-gray-600">phone: {elem.phone}</h2>
         {checked==true && <h2 className="px-3 py-1 text-white mt-1 text-sm w-fit rounded-full bg-orange-600">favorate</h2>}

         <button className="px-5 py-1 bg-red-600 text-white text-sm rounded-full">delete</button>
        </div>
        </div>
      })}
  </div>
      </div>
  
   
 
  )
}

export default App 
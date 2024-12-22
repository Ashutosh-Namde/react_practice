import { useState } from "react"


function App() {
 const [name,setName] = useState("")
  const formHandeler = (el)=>{
    el.preventDefault()
    console.log(name);
    setName("     ")
  }
  return (
    <div className="p-10">
      <form onSubmit={(e)=>{formHandeler(e)}}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enterr Name"  className="border-2 border-black"/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App

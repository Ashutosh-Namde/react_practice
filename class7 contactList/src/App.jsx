import { useState } from "react"
import Cards from "./components/Cards"
import Form from "./components/Form"


function App() {
  const [user, setUser] = useState([])

  const formHandlerData = (data)=>{
    const newData = [...user , data]
    setUser(newData)
    // console.log(data);
    

  }
  return (
    <div className="h-screen w-full bg-gray-300 flex">
      <Form formHandlerData={formHandlerData}/>
      <Cards data={user} />
    </div>
  )
}

export default App
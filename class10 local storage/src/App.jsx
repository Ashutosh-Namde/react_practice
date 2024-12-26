import { useState } from "react"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useRef } from "react"


const App = () => {

  const [theme , setTheme] = useState(localStorage.getItem("theme"))
  const changeMode = ()=>{
    if(theme === "light"){
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
     else{
      localStorage.setItem("theme " ,"light")
      setTheme("light")
     }
  }
  const modeButton = useRef(null)
  useEffect(()=>{
   modeButton.current.setAttribute('id',theme)
   
  })
  
  return (
    <div>
      <Navbar changeMode={changeMode} modeButton = {modeButton}/>
     
      
    </div>
  )
}

export default App
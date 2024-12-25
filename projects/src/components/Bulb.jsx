
import { useRef } from "react";
import { IoBulb } from "react-icons/io5";


function Bulb() {

    const button = useRef(null)
   
    
  return (
    <div  className="h-screen bg-emerald-700 flex justify-center items-center flex-col gap-5">
          <h3 className="text-white"><IoBulb size={350 } /></h3>
          <h3 className="px-10 rounded-full  bg-white">
            <h3 ref={button} className="px-5 rounded-full py-5 translate-x-[-40px]   border-black border-2"></h3>
          </h3>
    </div>
  )
}

export default Bulb
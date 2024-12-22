/* eslint-disable no-unused-vars */
import { useState } from "react";
import Card from "./components/Card"


function App() {

  const data = [{
    name:"Ashutosh",
    profection:"Enggenier",
    image:"https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend:false
  },
  {
    name:"Kajal",
    profection:"IAS",
    image:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    friend:false
  },
  {
    name:"Rohit",
    profection:"Enggenier",
    image:"https://plus.unsplash.com/premium_photo-1682096630303-83ea15caadca?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend:false
  },
  {
    name:"Ayush",
    profection:"Enggenier",
    image:"https://plus.unsplash.com/premium_photo-1682096321271-53ff907c671c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend:false
  }];

  const[realdata , setRealData] =  useState(data);
 
 const handleButton = (cardindex)=>{
    setRealData((prev)=>{
      return prev.map((item,idx)=>{
        if(idx== cardindex ){
          return {...item,friend: !item.friend}
        }
        return item
      }

    )})
 }

  return (
    <div  className="flex items-center justify-center bg-slate-500 h-screen gap-5">
      {realdata.map((elem, idx) => (
      <Card values={elem} key={idx} index={idx} handleButton={handleButton}/>
    ))}
    </div>

  );
}

export default App
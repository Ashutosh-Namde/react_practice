/* eslint-disable react/prop-types */


function Card({values,handleButton , index }) {
    const{name,profection,image,friend}=values;
  return (
       <div>
        <div className="w-44 bg-white rounded-lg overflow-hidden">
            <div className="imageDiv h-32   ">
                <img src={image} alt="" />
            </div>
            <div className="detailsDiv p-2">
                <h1 className=" font-semibold">{name}</h1>
                <h2 className=" text-xs text-gray-500 font-semibold">{profection}</h2>
                <button onClick={()=>{handleButton(index)}} className={`px-4 mt-4 py-1 text-xs ${friend?"bg-green-500":"bg-blue-400"} rounded-lg mb-2 text-white`}>{friend === true ? "Friends": "Add Friend"}</button>
            </div>
        </div>
        </div>
  
  )
}

export default Card
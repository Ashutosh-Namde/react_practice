

const Navbar = ({changeMode , modeButton}) => {
  return (
    <div  ref={modeButton} className="h-screen w-full bg-slate-50 flex  flex-col">
    <div className="h-30 w-full  flex justify-between items-center p-8">
        <h1 className="text-3xl font-bold">Sheryians</h1>
        <div className="flex gap-5 font-semibold">
            <h4>Home</h4>
            <h4>Contacts</h4>
            <h4>Courses</h4>
            <h4>Live</h4>
            <button onClick={changeMode}>Mode</button>
        </div>
        </div>
        <h1 className=" text-7xl font-bold flex items-start justify-center my-auto">SHERYIANS</h1>
        
    </div>
  )
}

export default Navbar
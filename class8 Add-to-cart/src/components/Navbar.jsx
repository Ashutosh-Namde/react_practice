

function Navbar() {
  return (
    <div className="h-20 w-full bg-slate-200 flex justify-between items-center p-7">
        <h1 className="font-bold text-3xl ">SHOPZZZYY</h1>
        <div className="flex justify-center items-center gap-7">
            <h4>Home</h4>
            <h4>Shoping</h4>
            <h4>Contact Us</h4>
            <h4>Men Section</h4>
        </div>
        <button className="px-6 font-semibold py-1 bg-gray-500 text-white rounded-lg">Cart</button>

    </div>
  )
}

export default Navbar
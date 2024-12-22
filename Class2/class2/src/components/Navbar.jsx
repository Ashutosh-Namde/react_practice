/* eslint-disable react/prop-types */


function Navbar({data}) {
  return (
    <div className='flex items-center justify-between h-20 p-10'> 
        <h1>Orange</h1>
        <div className='px-4 py-2 bg-orange-600 flex gap-3 rounded text-white'>
        <h2>Favarates</h2>
        <h2>{data.filter((item)=> item.added).length}</h2>
        </div>
    </div>
  )
}

export default Navbar
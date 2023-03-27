import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between w-full h-20 bg-blue-400'>
      <h1 className='text-3xl p-5 text-white'>Crud Redux</h1>
      <button className='bg-white h-12 text-3xl rounded-lg px-5 text-blue-300 mr-5 mt-5 '>Add Users</button>
    </div>
  )
}

export default Navbar
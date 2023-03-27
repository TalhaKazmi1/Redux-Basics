import React from 'react'
import Table from '../components/Table'

function Homepage() {
  return (
    
    <div className='flex flex-col'>

        <h1 className='text-3xl mt-10 text-center'>Homepage</h1>

        <div className='mt-10 mx-auto'>

        <Table/>
        </div>
    </div>
  )
}

export default Homepage
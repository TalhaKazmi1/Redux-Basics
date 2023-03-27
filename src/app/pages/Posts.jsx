import React from 'react'
import PostTable from '../components/PostTable'

function Posts() {
  return (
    <div className='flex flex-col'>

        <h1 className='text-3xl mt-10 text-center'>Posts</h1>

        <div className='mt-10 mx-auto'>

        <PostTable/>
        </div>
    </div>
  )
}

export default Posts
import React from 'react'
import Story from '../features/Story'
import Post from '../features/Post'
import Edit from '../features/Edit'

const Feed = () => {
  return (
    <div className='flex ml-[25vw] smm:ml-[10vw] smm:p-6 flex-col ' >
      <div className='flex mt-5 '>
        <Story />
      </div>
      <div className='flex mt-5'>
        <Edit />
      </div>
      <div className='flex flex-col mt-5'>
        <div className='flex'>
          <Post />
        </div>
        <div className='flex mt-5'>
          <Post />
        </div>
        <div className='flex mt-5'>
          <Post />
        </div>
      </div>
      </div>

  )
}

export default Feed
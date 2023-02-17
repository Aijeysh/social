import React from 'react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import Feed from '../components/Feed'

const Home = () => {
  return (

    <div className='flex bg-[#242526]'>

      <div className='fixed self-start'>
        <SideNav />
      </div>

      <div className='flex-col ml-[24vw] smm:ml-0 pb-3' >
        <Feed />
      </div>

      <div className='w-[100%] flex flex-col lmm:hidden'>
        <div className='fixed self-end pr-2'>
          <TopNav />
        </div>
      </div>

    </div>

  )
}

export default Home

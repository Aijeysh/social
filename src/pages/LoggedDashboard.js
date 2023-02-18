import React from 'react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import Feed from '../components/Feed'
import ActiveFeed from '../features/ActiveFeed'

const LoggedDashboard = () => {
  return (
    <div className='flex bg-[#242526] '>
        <div className='flex'>
          <SideNav />
        </div>
      
        <div className='flex'>
          <Feed />
        </div>
      
        <div className='flex'>
          <TopNav />
        </div>

      {/* 
      <div className='fixed self-start'>
        <SideNav />
      </div>

      <div className='flex-col ml-[24vw] smm:ml-0 mmm:pl-[5vw]  pb-3' >
        <Feed />
      </div>

      <div className='w-[100%] flex flex-col lmm:hidden'>
        <div className='flex  self-end pr-2'>
          <TopNav />
        </div>
        <div className='flex  w-full ml-8 right-4'>
          <div className='flex '>
           <ActiveFeed />
          </div>
          <div className='flex '>
          <ActiveFeed/>
          </div>
        </div>
      </div> */}

    </div>

  )
}

export default LoggedDashboard
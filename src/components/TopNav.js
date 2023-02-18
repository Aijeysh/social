import React from 'react'
import ActiveFeed from '../features/ActiveFeed'

const TopNav = () => {
  return (
    <div className='flex fixed right-4 pt-6 flex-col lmm:hidden '>
      <div className='flex bg-[#242526]  shadow-xl self-end right-0 top-0'>
          <div className='flex self-center h-10 bg-white '>
            <img src={process.env.PUBLIC_URL + "search.png"} alt='logo' className='h-8 w-8 ' />
          </div>
          <input placeholder='Search' className='h-10 outline-none ' /> 
      </div>
      <div className='flex'>
        <ActiveFeed/>
      </div>
    </div>
  )
}

export default TopNav
import React from 'react'

const TopNav = () => {
  return (
    <div className=' bg-[#242526] flex  shadow-xl '>
      <div className='flex '>
        <div className='flex m-4  ease-in-out border-slate-700'>
          <div className='flex self-center h-10 bg-white '>
            <img src={process.env.PUBLIC_URL + "search.png"} alt='logo' className='h-8 w-8 ' />
          </div>
          <input placeholder='Search' className='h-10 outline-none ' />
        </div>
      </div>
    </div>
  )
}

export default TopNav
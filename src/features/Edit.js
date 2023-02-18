import React from 'react'

const Edit = () => {
  return (
    <div className='flex bg-slate-400 rounded-lg w-[38vw] lmm:w-[50vw] smm:[80vw] mmm:w-[70vw]'>
      <div className='flex self-center h-32 '>
        <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='logo' className='h-12 w-12 self-center' />
      </div>
      <div className='flex self-center w-full'>
        <button className=' bg-[#EEEFF0] rounded-lg h-12 w-[90%]' >Share Your Moment</button>
      </div>
    </div>
  )
}

export default Edit
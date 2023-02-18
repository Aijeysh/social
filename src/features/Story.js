import React from 'react'

const Story = () => {
  return (
    <div className='flex bg-slate-400 rounded-lg lsm:w-[38vw] lmm:w-[50vw] smm:[80vw] mmm:w-[70vw]'>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="storyjs" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="storyjs" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="storyjs" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="storyjs" />
      </div>
    </div>
  )
}

export default Story
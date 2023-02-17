import React from 'react'

const Story = () => {
  return (
    <div className='flex bg-slate-400 rounded-lg'>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-40 w-32 py-3" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-40 w-32 py-3" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-40 w-32 py-3" />
      </div>
      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-40 w-32 py-3" />
      </div>
    </div>
  )
}

export default Story
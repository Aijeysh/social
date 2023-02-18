import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveFeed = () => {
  return (
    <div className='shadow-xl flex flex-col bg-[#94A3B8] m-2 p-6 text-[#363131] rounded-xl'>
      <div className='flex '>
      <h2 className='flex self-center'>Online:</h2>
      </div>
      <div className='flex flex-col '>
        <ul>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
          <li><NavLink to='/inbox/SharmAijeysh'>Sharma Aijeysh</NavLink>   </li>
      </ul>
      </div>
    </div>
  )
}

export default ActiveFeed
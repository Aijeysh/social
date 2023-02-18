import React from 'react'

const Post = () => {
  return (
    <div className='flex flex-col  text-slate-200  w-[38vw] lmm:w-[50vw] smm:[80vw] mmm:w-[70vw]'>
      <div className='flex flex-col border border-slate-400 overflow-hidden rounded-xl'>
      <div className='flex postprofile bg-[#94A3B8]'>
        <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='logo' className='h-12 w-12 self-center flex ' />
        <h2 className='flex self-center font-semibold'>Aijeysh Sharma</h2><p className='flex self-center'> &nbsp; @SharmaAijeysh</p>
      </div>
      <div className='flex p-3 bg-[#15202B]'>
        <div className='px-8'>
          <p> lorem ipsum fsauhfjk gfg sdfffg f  sfksgffhsd kgg fdg fkgsdgfjkgg fsdgkjgfgkgfgkshdg g fgfkhg sdghfghgfgsdh fgsgh aaf fgsdg fghfgf gdf sgf fgsfgg dfhgsdfgsfjkdh sj gfsg kf ffgsfgsdh shgfkhsd gfgsdhffgsdhfgsh gdfjfgjdh fgjdgdfgd fj sgfgjs ffgs fgs gfksdg kf fsauhfjk  </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Post
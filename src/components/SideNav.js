import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex h-screen smm:hidden ">
        <div className="flex flex-col pt-4 bg-[#242526] h-screen  shadow-xl gmm:shadow-none w-[22vw] text-slate-200">
        <a href="/profile" className="flex flex-col self-center">
          <img src={process.env.PUBLIC_URL + "logo192.png"} alt='logo' className='h-12 w-12' />
        </a>
        <div className="mt-12 flex flex-col ml-[4vw]" >
          <NavLink to='/post' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "dashlogo.png"} alt='dash logo' className="h-10 w-10" />
           <p className="flex self-center lmm:hidden"> Dashboard</p></NavLink>
          <NavLink to='/inbox' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center lmm:hidden">Inbox</p></NavLink>
          <NavLink to='/friends' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "add-friend.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center lmm:hidden">Friends</p></NavLink>
          <NavLink to='/enjoyment' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "entertainment.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center lmm:hidden">Enjoyment</p></NavLink>
          <NavLink to='/signup' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "setting.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center lmm:hidden">Settings</p></NavLink>
          <NavLink to='/notifications' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center lmm:hidden">Notification</p></NavLink>
        </div>
        <div className="flex fixed bottom-8 lmm:bottom-1  ml-[4vw]">
          <button className="flex self-center">
            <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='logo' className='h-10 w-10 ' />
            <p className="flex self-center lmm:hidden">@SharmaAijeysh</p>
          </button>
        </div>
      </div>

    </div>
  );
}
export default SideNav
import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
      <div className="flex fixed flex-col pt-4 bg-[#242526] h-screen smm:hidden  shadow-xl gmm:shadow-none text-slate-200">
        <a href="/profile" className="flex flex-col self-center">
          <img src={process.env.PUBLIC_URL + "logo192.png"} alt='logo' className='h-12 w-12' />
        </a>
        <div className="mt-12 flex flex-col ml-[3vw] mr-[1vw]" >
          <NavLink to='/post' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "dashlogo.png"} alt='dash logo' className="h-10 w-10" />
           <p className="flex self-center"> Dashboard</p></NavLink>
          <NavLink to='/inbox' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "chat1.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center">Inbox</p></NavLink>
          <NavLink to='/friends' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "add-friend.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center">Friends</p></NavLink>
          <NavLink to='/enjoyment' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "entertainment.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center ">Enjoyment</p></NavLink>
          <NavLink to='/signup' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "setting.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center ">Settings</p></NavLink>
          <NavLink to='/notifications' className='sidea py-3 flex px-2' >
            <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='dash logo' className="h-10 w-10" />
            <p className="flex self-center ">Notification</p></NavLink>
        </div>
        <div className="flex my-auto pt-[4vh]">
          <button className="flex self-center">
            <img src={process.env.PUBLIC_URL + "notification-bell.png"} alt='logo' className='h-10 w-10 ' />
            <p className="flex  self-center">@SharmaAijeysh</p>
          </button>
        </div>
      </div>


  );
}
export default SideNav
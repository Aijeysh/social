import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const SignUp = () => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='bg-gray-400 h-screen' >
      <div className='max-w-[60%] mx-auto'>
        <div className=' bg-[#F7F7F7] rounded-lg border border-primaryBorder shadow-xl py-12 px-16'>
          <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
            Create  your account 🔐
          </h1>
          <form>
            <div className='flex'>
              <div>
                <label htmlFor='name'>First Name</label>
                <input
                  type='text'
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id='email'
                  placeholder='Your First Name' required
                />
              </div>
              <div className='ml-8'>
                <label htmlFor='surname'>Last Name</label>
                <input
                  type='text'
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id='email'
                  placeholder='Your Last Name'
                />
              </div>
            </div>
            <div>
              <label htmlFor='dob'>Date of Birth</label>
              <div className=' h-3 w-full mb-4  text-sm'>
                <DatePicker className='border outline-none h-10 w-full mb-8' selected={startDate} onChange={date => setStartDate(date)} />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='email'
                placeholder='Your Email' required
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                id='password'
                placeholder='Your Password' required
              />

            </div>
            <div>
              <label htmlFor='password'>Confirm Password</label>
              <input
                type='password'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                id='password'
                placeholder='Your Password' required
              />

            </div>

            <div className='flex justify-center items-center mt-6'>
              <button
                type='submit'
                className='bg-[#A460EB] w-[40%] rounded  py-1 text-white text-light tracking-widest' >
                Create
              </button>
            </div>
            <div className='flex justify-center items-center mt-4 text-blue-600 text-lg'> or &nbsp;&nbsp; <NavLink to="/login"> Sign In</NavLink> </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
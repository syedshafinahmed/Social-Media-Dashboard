import React from 'react';
import img from '../assets/me.jpg'
import ai from '../assets/chatgpt.jpg'
import arrow from '../assets/arrowup.png'
const Two = () => {
  return (
    <div className='bg-[#dfb645] w-full h-full rounded-md flex flex-col justify-center relative'>
      <p className='leading-none text-xl p-3 text-black font-medium'>Write your content using AI.</p>
      <div className='p-2'>
        <div className='bg-white p-1 rounded-lg'>
          <div className='flex justify-between p-1'>
            <div className='bg-red-200 px-3 py-1 rounded-sm'>
              <p className='text-black text-xs'>Give me 5 steps to learn any new skill faster.</p>
            </div>
            <img src={img} className='rounded-full w-10 h-10 p-1' alt="" />
          </div>
          <div className='flex justify-between p-1'>
            <img src={ai} className='rounded-full w-10 h-10 p-1' alt="" />
            <div className='bg-yellow-200 px-3 py-1 rounded-sm'>
              <p className='text-black text-xs'>Sure! Here are 5 steps to learn any new skill faster...</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#dfb645] inline-flex items-center justify-center w-fit h-fit rounded-full border-5 absolute left-36 top-39'>
        <img src={arrow} className='w-8' alt="" />
      </div>
    </div>
  );
};

export default Two;
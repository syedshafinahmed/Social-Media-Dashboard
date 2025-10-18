import React from 'react';
import { FaAnglesUp } from 'react-icons/fa6';
import bar from '../assets/bar.png'
import arrow from '../assets/arrowup.png'
import { FaPercent } from 'react-icons/fa';
const Six = () => {
  return (
    <div className='bg-[#734ae2] w-full h-full rounded-md flex items-center'>


      <div className='p-3 w-3/5 relative'>
        <div className='bg-white p-5 rounded-xl'>
          <p className='text-xs text-gray-500'>Follower Growth</p>
          <div className='flex justify-between items-center'>
            <p className='text-black font-bold text-4xl py-2'>20,642</p>
            <span className='bg-green-400 p-2 text-green-900 rounded-full text-xs'><FaAnglesUp size={8} /></span>
          </div>
          <div className='flex gap-x-2 justify-center'>
            <img src={bar} className='w-13' alt="" />
            <img src={bar} className='w-13' alt="" />
            <img src={bar} className='w-13' alt="" />
          </div>
        </div>
      </div>


      <div className='flex gap-x-2 bg-white p-1 border border-gray-300 rounded-full items-center absolute bottom-2 right-37 shadow-amber-950'>
        <div className='bg-[#e6ac10] text-white items-center inline-flex justify-center w-fit h-fit rounded-full border-5'>
          <img src={arrow} className='w-8' alt="" />
        </div>
        <div>
          <p className='text-xs text-gray-500'>Followers</p>
          <p className='text-black font-bold text-sm'>20,642</p>
        </div>
        <span className='bg-green-400 p-2 text-green-900 rounded-full text-xs'><FaPercent size={5} /></span>
      </div>

      <div className='flex justify-center items-center text-white pr-2 w-2/5'>
        <p className='font-bold leading-none text-xl pl-1'>Grow followers with non stop content.</p>
      </div>
    </div>
  );
};

export default Six;
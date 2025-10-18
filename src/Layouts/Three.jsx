import React from 'react';
import insta from '../assets/insta.png'
const Three = () => {
  return (
    <div className='bg-gray-300 rounded-md w-full h-full p-3 flex flex-col justify-center gap-5'>
      <div className='flex items-center gap-x-2 bg-white p-2 rounded-full'>
        <div className='bg-[#e6ac10] inline-flex items-center justify-center w-fit h-fit rounded-full border-5 border-[#e6ac10]'>
          <img src={insta} className='w-5' alt="" />
        </div>
        <div className='text-xs'>
          <p className='text-black font-black'>@ShafinAhmed</p>
          <p className='text-gray-500'>Shafin Ahmed</p>
        </div>
      </div>
      <p className='text-black font-bold text-xl leading-none'>Manage multiple accounts and platforms.</p>
    </div>
  );
};

export default Three;
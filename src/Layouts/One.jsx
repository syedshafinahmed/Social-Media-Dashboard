import React from 'react';

const One = () => {
  return (
    <div className='bg-[#EEE8AA] rounded-md w-full h-full p-5 relative flex flex-col justify-center '>
      <p className='font-bold text-2xl text-black leading-none'>Create and schedule content <span className='italic text-[#483D8B]'>quicker.</span></p>
      <button className='btn bg-[#dfb645] text-[#483D8B] border-none rounded-full font-medium text-xs mt-5 w-full'>Create Post <i class="fa-solid fa-plus"></i></button>
      <div className='absolute bottom-13 right-22 text-black'><i class="fa-solid fa-location-arrow"></i></div>
    </div>
  );
};

export default One;
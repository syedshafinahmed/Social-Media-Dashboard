import React from 'react';

const Eight = () => {
  return (
    <div className='bg-[#5f31df] w-full h-full rounded-md flex flex-col justify-center items-center'>
      <p className='font-medium text-4xl text-center leading-none'>Social Media <span className='text-[#e0b12d]'>10x</span> <span className='italic'>Faster</span> with AI</p>
      <div className='text-[#e0b12d] flex gap-3 py-2'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <p className='text-xs'>Over 4,000 5-star reviews</p>
    </div>
  );
};

export default Eight;
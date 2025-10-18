import React from 'react';
import bar from '../assets/bar.png'
const Five = () => {
  return (
    <div className='bg-[#a183f5] rounded-md w-full h-full flex flex-col justify-center'>
      <p className='text-black font-bold text-xl leading-none p-5'>Schedule to social media.</p>

      <div className='pl-5'>
        <div className='bg-white rounded-tl-xl rounded-bl-xl'>
          <p className='text-sm border-b border-gray-300 pl-3 py-3 font-bold'>Best Time to Post</p>
          <div className='flex justify-between p-3'>
            <span className='badge badge-error text-xs rounded-full'>Mon</span>
            <span className='badge text-xs'>Tue</span>
            <span className='badge text-xs'>Wed</span>
          </div>

          <div className='pl-17 pb-3'>
            <span className='badge badge-success text-xs rounded-full'>Most Active</span>
          </div>

          <div className='flex gap-x-2 justify-center'>
            <img src={bar} className='w-15' alt="" />
            <img src={bar} className='w-15' alt="" />
          </div>
        </div>
      </div>

      <p className='text-black font-medium text-sm leading-none p-5'>Optimize post images to publish content at the perfect time for your audience.</p>
    </div>
  );
};

export default Five;
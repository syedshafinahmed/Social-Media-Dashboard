import React from 'react';
import { TiTick } from 'react-icons/ti';

const Four = () => {
  return (
    <div className='bg-[#e6ac10] rounded-md w-full h-full flex flex-col justify-between'>
      <p className='text-black font-bold text-xl leading-none p-3'>Maintaining a consistent posting schedule.</p>

      <div className='px-2'>
        <div className='bg-white rounded-tr-xl rounded-tl-xl'>
          <button className='text-white bg-[#5f31df] w-full rounded-tr-xl rounded-tl-xl flex justify-between items-center p-2'>
            <p className='text-sm'>August, 2024</p>
            <p className='text-xs'>Week 1</p>
          </button>
          <div className='flex justify-between p-4'>
            <TiTick className='bg-[#5f31df] rounded-full' />
            <TiTick className='bg-[#5f31df] rounded-full' />
            <TiTick className='bg-[#5f31df] rounded-full' />
            <TiTick className='bg-[#5f31df] rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
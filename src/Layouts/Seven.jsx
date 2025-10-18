import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Zayed from '../assets/snapZ.jpg'
import Shafin from '../assets/snapS.jpg'
import Anik from '../assets/snapA.PNG'
const Seven = () => {
  return (
    <div className='bg-gray-300 rounded-md w-full h-full text-black flex flex-col justify-between p-5'>
      <span className='flex gap-x-1 items-center text-4xl'><FaChevronRight /> 56%</span>
      <p className='text-xs'>faster audience growth</p>
      <div className='flex justify-center gap-x-9 p-2 relative'>
        <img className='rounded-full border-2 border-white w-15' src={Shafin} alt="" />
        <img className='rounded-full border-2 border-white w-15' src={Zayed} alt="" />
      </div>
      <img className='rounded-full border-2 border-white w-16 absolute bottom-7 left-66' src={Anik} alt="" />
    </div>
  );
};

export default Seven;
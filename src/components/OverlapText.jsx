import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const OverlapText = ({trailerMovie}) => {
  return (
    <div className='flex flex-col items-start w-[40%] gap-3 bg-gradient-to-r from-black/40 absolute bottom-20 left-10'>
        <h6 className='m-0 text-white font-bold text-2xl'>{trailerMovie?.originalTitle}</h6>
        <p className='m-0 text-white'>{trailerMovie?.description}</p>
        <div className='flex items-center gap-2'>
           <button className='px-6 py-2 bg-white rounded-md text-black flex items-center gap-2 font-medium'>
               <FaPlay /> Play
           </button>
           <button className='px-6 py-2 bg-gray-500 rounded-md text-white font-medium flex items-center gap-2'>
              <MdInfoOutline /> More Info
           </button>
        </div>
    </div>
  )
}

export default OverlapText
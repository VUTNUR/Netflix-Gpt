import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const OverlapText = ({ trailerMovie }) => {
  return (
    <div
      className="
        absolute 
        left-6 bottom-16 
        sm:left-10 sm:bottom-24 
        md:left-12 md:bottom-32 
        flex flex-col items-start 
        gap-3 
        bg-gradient-to-r from-black/60 
        w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 
        p-4 sm:p-6 rounded-md
      "
    >
      <h6 className="m-0 text-white font-bold text-lg sm:text-2xl md:text-3xl leading-tight line-clamp-2">
        {trailerMovie?.originalTitle}
      </h6>

      <p className="m-0 text-white text-sm sm:text-base md:text-lg opacity-90 line-clamp-3">
        {trailerMovie?.description}
      </p>

      <div className="flex items-center gap-2 flex-wrap mt-2">
        <button className="px-4 sm:px-6 py-2 bg-white rounded-md text-black flex items-center gap-2 font-medium text-sm sm:text-base hover:bg-gray-200 transition">
          <FaPlay /> Play
        </button>
        <button className="px-4 sm:px-6 py-2 bg-gray-500 rounded-md text-white font-medium flex items-center gap-2 text-sm sm:text-base hover:bg-gray-600 transition">
          <MdInfoOutline /> More Info
        </button>
      </div>
    </div>
  );
};

export default OverlapText;

import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[180px] sm:h-[220px] md:h-[250px] flex-shrink-0 rounded-md overflow-hidden">
      <img
        src={movie?.primaryImage || movie?.i?.imageUrl}
        alt={movie?.title || movie?.l}
        className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;

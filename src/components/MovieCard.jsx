// MovieCard.jsx
import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[180px] h-[250px] flex-shrink-0 rounded-md overflow-hidden">
      <img
        src={movie.primaryImage}
        alt={movie.title}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  )
}

export default MovieCard

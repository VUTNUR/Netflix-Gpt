// MovieList.jsx
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, title }) => {
  return (
    <div className='relative bottom-32'>
    <p className='m-0 text-[1.2rem] font-medium text-white px-8 py-2'>{title}</p>
    <div className="flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide">
      {movies?.map((movie) => {
        if(movie.primaryImage){
          return <MovieCard key={movie.id} movie={movie} />
        }
     })}
    </div>
    </div>
  )
}

export default MovieList

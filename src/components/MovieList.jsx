import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div
      className={`${
        title ? "relative md:bottom-32" : ""
      } w-full`}
    >
      <p className="m-0 text-lg sm:text-xl md:text-2xl font-semibold text-white px-4 sm:px-6 md:px-8 py-2">
        {title || decodeURIComponent(movies?.q)?.toUpperCase()}
      </p>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-3 sm:px-6 py-2 scrollbar-hide">
        {title
          ? movies?.map((movie) => {
              if (movie?.primaryImage) {
                return <MovieCard key={movie.id} movie={movie} />;
              }
              return null;
            })
          : movies?.d?.map((movie) => {
              if (movie?.i?.imageUrl) {
                return <MovieCard key={movie.id} movie={movie} />;
              }
              return null;
            })}
      </div>
    </div>
  );
};

export default MovieList;

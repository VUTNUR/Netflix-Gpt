import React, { useState } from "react";
import { useSelector } from "react-redux";
import { multiLanguages } from "../utils/constant";
import useSearchMovieHook from "../hooks/useSearchMovieHook";
import MovieList from "./MovieList";

const Search = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [fetchSearchMovie] = useSearchMovieHook();
  const showLanguage = useSelector((store) => store.profile.showLanguage);
  const searchMovies = useSelector((store) => store.movie.search);

  return (
    <>
      {/* Search Input Section */}
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-0">
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center
            bg-black/80 w-full sm:w-4/5 md:w-3/5 lg:w-2/5
            p-3 sm:p-4 rounded-md mt-4 gap-3 sm:gap-2
          "
        >
          <input
            type="text"
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder={multiLanguages[showLanguage]?.placeholder}
            className="
              w-full sm:flex-1
              py-2 px-3 
              rounded-md 
              border border-white 
              bg-white 
              text-black 
              text-sm sm:text-base
              focus:outline-none
            "
          />
          <button
            onClick={() => fetchSearchMovie(searchMovie)}
            className="
              w-full sm:w-auto 
              py-2 px-4 
              bg-red-800 
              text-white 
              rounded-md 
              cursor-pointer 
              text-sm sm:text-base 
              font-medium
              hover:bg-red-700 transition
            "
          >
            {multiLanguages[showLanguage]?.search}
          </button>
        </div>
      </div>

      {/* Search Results */}
      {searchMovies && (
        <div className="bg-black/90 flex flex-col gap-2 mt-6 px-3 sm:px-4 md:px-8">
          <MovieList movies={searchMovies} />
        </div>
      )}
    </>
  );
};

export default Search;

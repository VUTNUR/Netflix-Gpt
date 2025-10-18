import React, { useEffect, useMemo } from "react";
import Header from "./Header";
import useMovieHooks from "../hooks/useMovieHooks";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";

const Browser = () => {
  const showSearch = useSelector((store) => store.profile.showSearch);
  useMovieHooks();
  const trailerMovie = useSelector((store) => store.movie.nowPlayingMovies);
  return (
    <div>
      {showSearch ? (
        <div className="h-screen bg-[url('/src/assets/netflix-bg.jpg')] bg-cover bg-center">
                 <Header />
        <Search />
        </div>
      ) : (
        <>
           <Header />
          <MainContainer trailerMovie={trailerMovie} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;

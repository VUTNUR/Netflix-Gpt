import React, { useEffect, useMemo } from 'react';
import Header from './Header';
import useMovieHooks from '../hooks/useMovieHooks';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
 useMovieHooks()
  const trailerMovie = useSelector((store)=>store.movie.nowPlayingMovies)
  return (
    <div>
      <Header /> 
      <MainContainer trailerMovie={trailerMovie}/>
      <SecondaryContainer />
    </div>
  );
};

export default Browser;

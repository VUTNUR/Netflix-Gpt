import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movie.nowPlayingNew);
  const trending = useSelector((store) => store.movie.trending);
  const popular = useSelector((store) => store.movie.popular);

  return (
    <div className="bg-black/90 flex flex-col gap-6 md:gap-10 pt-8 md:pt-0">
      <MovieList movies={nowPlaying} title="Now Playing" />
      <MovieList movies={popular} title="Popular" />
      <MovieList movies={trending} title="Trending" />
    </div>
  );
};

export default SecondaryContainer;

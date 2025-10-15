import React, { useEffect, useMemo } from 'react';
import Header from './Header';
import useMovieHooks from '../hooks/useMovieHooks';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';

const Browser = () => {
 useMovieHooks()
  const movies = useSelector((store)=>store.movie)
  console.log("movies", movies)
  const trailerMovie = useMemo(()=>{
   const filterMovies = movies?.nowPlayingMovies?.filter((movie)=>movie.trailer);
   console.log("filterMovies", filterMovies)
   if(filterMovies){
    return filterMovies[0]
   }else{
    return [    {
        "id": "tt3180122",
        "url": "https://www.imdb.com/title/tt3180122/",
        "primaryTitle": "John G. Avildsen: King of the Underdogs",
        "originalTitle": "John G. Avildsen: King of the Underdogs",
        "type": "movie",
        "description": "An examination of the Oscar-winning director who brought to life some of cinema\u0027s most beloved motion pictures.",
        "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@.jpg",
        "thumbnails": [
            {
                "url": "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
                "width": 100,
                "height": 148
            },
            {
                "url": "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
                "width": 280,
                "height": 414
            },
            {
                "url": "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
                "width": 380,
                "height": 562
            }
        ],
        "trailer": "https://www.youtube.com/watch?v=vbVZrSnnY4M",
        "contentRating": "Not Rated",
        "isAdult": false,
        "releaseDate": "2017-08-01",
        "startYear": 2017,
        "endYear": null,
        "runtimeMinutes": 78,
        "genres": [
            "Documentary"
        ],
        "interests": [
            "Documentary"
        ],
        "countriesOfOrigin": [
            "US"
        ],
        "externalLinks": null,
        "spokenLanguages": [
            "en"
        ],
        "filmingLocations": [
            "Los Angeles, California, USA"
        ],
        "productionCompanies": [
            {
                "id": "co0287742",
                "name": "AJ16 Entertainment"
            }
        ],
        "budget": null,
        "grossWorldwide": null,
        "averageRating": 7.6,
        "numVotes": 186,
        "metascore": null
    }]
   }
  },[movies])
  return (
    <div>
      <Header /> 
      <MainContainer trailerMovie={trailerMovie}/>
    </div>
  );
};

export default Browser;

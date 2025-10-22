import { useDispatch, useSelector } from "react-redux";
import {
  addMovie,
  addNowPlayingNew,
  addPopular,
  addTrending,
} from "../utils/movieSlice";
import data from "../utils/sampleData.json";
import { useEffect } from "react";

const useMovieHooks = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector((store)=>store.movie.nowPlayingMovies)
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '50eab60c14msh3ad59ac4947212ap1550c4jsnf7b509e97510',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json(); // or .json() if API returns JSON
        console.log(data);
            // function to divide the array into 3 equal parts
    const distributeMovies = (data) => {
      const total = data.length;
      const perCategory = Math.ceil(total / 3); // divide equally

      const nowPlayingNew = data.slice(0, perCategory);
      const trending = data.slice(perCategory, perCategory * 2);
      const popular = data.slice(perCategory * 2);

      return {
        nowPlayingNew,
        trending,
        popular,
      };
    };
    const trailerMovie = (data) => {
      const filterMovies = data?.filter((movie) => movie.trailer);
      if (filterMovies) {
        return filterMovies[0];
      } else {
        return [
          {
            id: "tt3180122",
            url: "https://www.imdb.com/title/tt3180122/",
            primaryTitle: "John G. Avildsen: King of the Underdogs",
            originalTitle: "John G. Avildsen: King of the Underdogs",
            type: "movie",
            description:
              "An examination of the Oscar-winning director who brought to life some of cinema\u0027s most beloved motion pictures.",
            primaryImage:
              "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@.jpg",
            thumbnails: [
              {
                url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
                width: 100,
                height: 148,
              },
              {
                url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
                width: 280,
                height: 414,
              },
              {
                url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
                width: 380,
                height: 562,
              },
            ],
            trailer: "https://www.youtube.com/watch?v=vbVZrSnnY4M",
            contentRating: "Not Rated",
            isAdult: false,
            releaseDate: "2017-08-01",
            startYear: 2017,
            endYear: null,
            runtimeMinutes: 78,
            genres: ["Documentary"],
            interests: ["Documentary"],
            countriesOfOrigin: ["US"],
            externalLinks: null,
            spokenLanguages: ["en"],
            filmingLocations: ["Los Angeles, California, USA"],
            productionCompanies: [
              {
                id: "co0287742",
                name: "AJ16 Entertainment",
              },
            ],
            budget: null,
            grossWorldwide: null,
            averageRating: 7.6,
            numVotes: 186,
            metascore: null,
          },
        ];
      }
    };
    const categorizedMovies = distributeMovies(data);
    dispatch(addMovie(trailerMovie(data)));
    dispatch(addNowPlayingNew(categorizedMovies.nowPlayingNew));
    dispatch(addTrending(categorizedMovies.trending));
    dispatch(addPopular(categorizedMovies.popular));
      } catch (error) {
        console.error(error);
      }
    };
   if(!fetchedData) fetchData();
    //     const distributeMovies = (data) => {
    //   const total = data.length;
    //   const perCategory = Math.ceil(total / 3); // divide equally

    //   const nowPlayingNew = data.slice(0, perCategory);
    //   const trending = data.slice(perCategory, perCategory * 2);
    //   const popular = data.slice(perCategory * 2);

    //   return {
    //     nowPlayingNew,
    //     trending,
    //     popular,
    //   };
    // };
    // const trailerMovie = (data) => {
    //   const filterMovies = data?.filter((movie) => movie.trailer);
    //   if (filterMovies) {
    //     return filterMovies[0];
    //   } else {
    //     return [
    //       {
    //         id: "tt3180122",
    //         url: "https://www.imdb.com/title/tt3180122/",
    //         primaryTitle: "John G. Avildsen: King of the Underdogs",
    //         originalTitle: "John G. Avildsen: King of the Underdogs",
    //         type: "movie",
    //         description:
    //           "An examination of the Oscar-winning director who brought to life some of cinema\u0027s most beloved motion pictures.",
    //         primaryImage:
    //           "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@.jpg",
    //         thumbnails: [
    //           {
    //             url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
    //             width: 100,
    //             height: 148,
    //           },
    //           {
    //             url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    //             width: 280,
    //             height: 414,
    //           },
    //           {
    //             url: "https://m.media-amazon.com/images/M/MV5BY2M5MDI5ZWUtNjdlMC00NDA3LTgyNDUtYzQwMjI3MTgwNjQ3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    //             width: 380,
    //             height: 562,
    //           },
    //         ],
    //         trailer: "https://www.youtube.com/watch?v=vbVZrSnnY4M",
    //         contentRating: "Not Rated",
    //         isAdult: false,
    //         releaseDate: "2017-08-01",
    //         startYear: 2017,
    //         endYear: null,
    //         runtimeMinutes: 78,
    //         genres: ["Documentary"],
    //         interests: ["Documentary"],
    //         countriesOfOrigin: ["US"],
    //         externalLinks: null,
    //         spokenLanguages: ["en"],
    //         filmingLocations: ["Los Angeles, California, USA"],
    //         productionCompanies: [
    //           {
    //             id: "co0287742",
    //             name: "AJ16 Entertainment",
    //           },
    //         ],
    //         budget: null,
    //         grossWorldwide: null,
    //         averageRating: 7.6,
    //         numVotes: 186,
    //         metascore: null,
    //       },
    //     ];
    //   }
    // };
    // const categorizedMovies = distributeMovies(data);
    // dispatch(addMovie(trailerMovie(data)));
    // dispatch(addNowPlayingNew(categorizedMovies.nowPlayingNew));
    // dispatch(addTrending(categorizedMovies.trending));
    // dispatch(addPopular(categorizedMovies.popular));
  }, []); // run only once
};
export default useMovieHooks;

import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import data from "../utils/sampleData.json"
import { useEffect } from "react";

const useMovieHooks = ()=>{
    const dispatch = useDispatch()
  useEffect(() => {
    // const fetchData = async () => {
    //   const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'x-rapidapi-key': '50eab60c14msh3ad59ac4947212ap1550c4jsnf7b509e97510',
    //       'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    //     }
    //   };

    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.json(); // or .json() if API returns JSON
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
    dispatch(addMovie(data))
  }, []); // run only once
}
export default useMovieHooks
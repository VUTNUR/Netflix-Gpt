import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addSearch } from '../utils/movieSlice';

const useSearchMovieHook = () => {
    const dispatch = useDispatch()
    const fetchSearchMovies = async (name)=>{
        const url = 'https://imdb-movies-web-series-etc-search.p.rapidapi.com/'+name+'.json';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '50eab60c14msh3ad59ac4947212ap1550c4jsnf7b509e97510',
                'x-rapidapi-host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            dispatch(addSearch(result))
        } catch (error) {
            console.error(error);
        }
    }
   return [fetchSearchMovies]
}

export default useSearchMovieHook
import React, { useEffect } from 'react';
import Header from './Header';

const Browser = () => {
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
        const result = await response.text(); // or .json() if API returns JSON
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // run only once

  return (
    <div>
      <Header /> 
    </div>
  );
};

export default Browser;

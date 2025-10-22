import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingNew: null,
    trending: null,
    popular: null,
    search: null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingNew: (state, action) => {
      state.nowPlayingNew = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addSearch : (state, action) =>{
      state.search = action.payload
    }
  },
});

export const { addMovie , addNowPlayingNew, addTrending, addPopular, addSearch} = movieSlice.actions;

export default movieSlice.reducer;

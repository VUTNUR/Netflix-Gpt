import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingNew: null,
    trending: null,
    popular: null,
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
  },
});

export const { addMovie , addNowPlayingNew, addTrending, addPopular} = movieSlice.actions;

export default movieSlice.reducer;

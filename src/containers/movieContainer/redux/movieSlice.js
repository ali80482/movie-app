import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recomendedMovie: {},
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovie: (state, action) => {
      return { ...state };
    },
    setMovie: (state, action) => {
      const { payload } = action;
      return { ...state, recommendedMovie: { ...payload } };
    },
  },
});

export const { getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../containers/movieContainer/redux/movieSlice';

const reducer = combineReducers({
  movie: movieReducer,
});

export default reducer;

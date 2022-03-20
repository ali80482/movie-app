import { call, put } from 'redux-saga/effects';
import { setMovie } from '../movieSlice';
import { getMovieData } from './movieAPICall';

export function* handleGetMovies(action) {
  try {
    const response = yield call(getMovieData);
    yield put(setMovie({ ...response }));
  } catch (error) {
    console.log(error);
  }
}

import { takeLatest } from 'redux-saga/effects';
import { handleGetMovies } from '../containers/movieContainer/redux/handlers/movie';
import { getMovie } from '../containers/movieContainer/redux/movieSlice';

export function* watcherSaga() {
  yield takeLatest(getMovie.type, handleGetMovies);
}

import { takeLatest } from 'redux-saga/effects';
import { getMovie } from '../containers/movieContainer/redux/movieSlice'; 
import { handleGetMovies } from "../containers/movieContainer/redux/handlers/movie";

export function* watcherSaga() {
    yield takeLatest(getMovie.type, handleGetMovies);
}
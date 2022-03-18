import { call, put } from "redux-saga/effects";
import { getMovieData } from './movieAPICall';
import { setMovie } from "../movieSlice";

export function* handleGetMovies(action) {
    try {
        const response = yield call(getMovieData);
        yield put(setMovie({ ...response}));
    } catch (error) {
        console.log(error);
    }
}
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import movieReducer from '../containers/movieContainer/redux/movieSlice';
import { watcherSaga } from './rootSaga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

// const reducer = combineReducers({
//   movie: movieReducer,
// })

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Reducer
import reducer from './reducers/reducer_recipes';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;

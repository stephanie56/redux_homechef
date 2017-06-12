import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import logger from 'redux-logger';

// Reducer
import reducer from './reducers/reducer_recipes';

// add `autoRehydrate` (a middleware) as an enhancer to store
const store = createStore(
  reducer,
  compose(
    autoRehydrate()
  ),
  applyMiddleware(logger)
);

export default store;

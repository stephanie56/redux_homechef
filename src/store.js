import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import { createLogger } from 'redux-logger';

// Reducer
import reducer from './reducers/reducer_recipes';

// add `autoRehydrate` (a middleware) as an enhancer to store
const store = createStore(
  reducer,
  undefined,
  compose(
    autoRehydrate()
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger()
  )
);

export default store;

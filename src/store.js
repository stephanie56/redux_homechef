import { createStore } from 'redux';
import recipes from './reducers/reducer_recipes';

const store = createStore(
  recipes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

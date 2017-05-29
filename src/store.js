import { createStore } from 'redux';
import recipes from './reducers/reducer_recipes';

const store = createStore(recipes);

export default store;

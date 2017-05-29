import data from '../data/data';

const initialState = {
  recipes: data
}

function recipes(state, action) {
  if(!state) state = initialState;
  // make a copy of the state
  const newState = { ...state };
  switch (action.type) {
    case 'INCREMENT':
        newState.counter = newState.counter + 1;
        newState.value = newState.value + 1;
        return newState;
    case 'DECREMENT':
        newState.counter = newState.counter - 1;
        newState.value = newState.value + 1;
        return newState;
    case 'TOGGLE_RECIPE':
        newState.recipes.showRecipeItem = !action.payload;
        return newState;
    default:
      return newState;
  }
}

export default recipes;

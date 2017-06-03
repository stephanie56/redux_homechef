import data from '../data/data';

const initialState = {
  recipes: data
}

function recipes(state, action) {
  if(!state) state = initialState;
  // make a copy of the state
  switch (action.type) {
    case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.item]
        };
    case 'REMOVE_RECIPE':
        return {
          ...state,
          recipes: [
            ...state.recipes.slice(0, action.index),
            ...state.recipes.slice(action.index + 1)]
          };
    case 'TOGGLE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.map((recipe) => {
          return {
            ...recipe,
            showRecipeItem: recipe.id === action.id ? !recipe.showRecipeItem : recipe.showRecipeItem
          };
          })};
    default:
      return state;
  }
}

export default recipes;

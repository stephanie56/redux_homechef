import data from '../data/data';

const initialState = {
  recipes: data
}

function recipes(state, action) {
  if(!state) state = initialState;
  // make a copy of the state
  const newState = { ...state };
  switch (action.type) {
    case 'ADD_RECIPE':
        newState.recipes.concat(action.item);
        return newState;
    case 'REMOVE_RECIPE':
        newState.recipes.splice(action.index, 1);
        return newState;
    // case 'TOGGLE_RECIPE':
    //     return state.recipes.map(recipe => {
    //       if(recipe.id == action.id){
    //           return recipe.showRecipeItem = !recipe.showRecipeItem;
    //       }
    //     });
    default:
      return newState;
  }
}

export default recipes;

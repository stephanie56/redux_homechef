import data from '../data/data';

const initialState = {
  recipes: data
}

function recipes(state, action) {
  if(!state) state = initialState;
  // make a copy of the state
  switch (action.type) {
    case 'ADD_RECIPE':
        return {...state, recipes: state.recipes.concat(action.item)};
    case 'REMOVE_RECIPE':
        return {...state, recipes: state.recipes.splice(action.index, 1)};
        console.log('state:', state);
    // case 'TOGGLE_RECIPE':
    //     return state.recipes.map(recipe => {
    //       if(recipe.id == action.id){
    //           return recipe.showRecipeItem = !recipe.showRecipeItem;
    //       }
    //     });
    default:
      return state;
  }
}

export default recipes;

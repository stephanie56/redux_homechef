import data from '../data/data';

const initialState = {
  recipes: data,
  showAddForm: false, // default: false
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
    case 'EDIT_RECIPE':
        return {
          ...state,
          recipes: [
            ...state.recipes.slice(0, action.index),
            action.item,
            ...state.recipes.slice(action.index + 1)]
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
          })
        };
    case 'LIKE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.map((recipe) => {
            return {
              ...recipe,
              favorite: recipe.id === action.id ? !recipe.favorite : recipe.favorite
            };
          })
        };
    case 'TOGGLE_NEW_FORM':
      return {
        ...state,
        showAddForm: !state.showAddForm
      };
    case 'TOGGLE_EDIT_FORM':
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
        return {
          ...recipe,
          showEditForm: recipe.id === action.id ? !recipe.showEditForm : recipe.showEditForm
          };
        })
      };
    default:
      return state;
  }
}

export default recipes;

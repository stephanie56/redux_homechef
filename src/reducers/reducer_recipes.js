import data from '../data/data';

const initialState = {
  recipes: data,
  isAddFormShown: false, // default: false
}

function recipes(state = initialState, action) {
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
            isRecipeItemShown: recipe.id === action.id ? !recipe.isRecipeItemShown : recipe.isRecipeItemShown
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
        isAddFormShown: !state.isAddFormShown
      };
    case 'TOGGLE_EDIT_FORM':
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          return {
            ...recipe,
            isEditFormShown: recipe.id === action.id ? !recipe.isEditFormShown : recipe.isEditFormShown
          };
        })
      };
    default:
      return state;
  }
}

export default recipes;

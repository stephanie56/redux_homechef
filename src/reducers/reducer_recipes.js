import data from '../data/data';
import localStorageInterface from '../localstorageInterface/index';

const initialState = {
  recipes: data,
  isAddFormShown: false, // default: false
}

function recipes(state = initialState, action) {
  const newState = {...state};
  switch (action.type) {
    case 'GET_CACHE':
      return {
        ...state,
        recipes: JSON.parse(localStorageInterface.getCachedRecipes()) || data
      };
    case 'CLEAR_CACHE':
      localStorageInterface.clearCachedRecipes();
      return {
        ...state,
        recipes: data
      };
    case 'ADD_RECIPE':
        newState.recipes = [...state.recipes, action.item];
        localStorageInterface.cacheRecipes(newState.recipes);
        return newState;
    case 'EDIT_RECIPE':
        newState.recipes = [
            ...state.recipes.slice(0, action.index),
            action.item,
            ...state.recipes.slice(action.index + 1)];
        localStorageInterface.cacheRecipes(newState.recipes);
        return newState;
    case 'REMOVE_RECIPE':
        newState.recipes = [
            ...state.recipes.slice(0, action.index),
            ...state.recipes.slice(action.index + 1)];
        localStorageInterface.cacheRecipes(newState.recipes);
        return newState;
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

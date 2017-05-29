export function toggleRecipe(id) {
  return {
    type: 'TOGGLE_RECIPE',
    id
  };
}

export function addRecipe(item) {
  return {
    type: 'ADD_RECIPE',
    item
  };
}

export function removeRecipe(index) {
  return {
    type: 'REMOVE_RECIPE',
    index
  };
}

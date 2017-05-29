export function toggleRecipe(recipe) {
  return {
    type: 'TOGGLE_RECIPE',
    payload: recipe
  };
}

export function decrementNum() {
  return {
    type: 'DECREMENT',
  };
}

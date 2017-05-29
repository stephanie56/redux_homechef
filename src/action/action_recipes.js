export function toggleRecipe(id) {
  return {
    type: 'TOGGLE_RECIPE',
    id
  };
}

export function decrementNum() {
  return {
    type: 'DECREMENT',
  };
}

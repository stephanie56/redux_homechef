export function toggleRecipe(index) {
  return {
    type: 'TOGGLE_RECIPE',
    payload: index
  };
}

export function decrementNum() {
  return {
    type: 'DECREMENT',
  };
}

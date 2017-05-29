const initialState = {
  recipes: [
    {
      id: 1,
      name: 'Caramelized Onion Pork Chops',
      ingredients: ['1 tablespoon vegetable oil', '4 pork loin chops', '3 teaspoons seasoning salt', '2 teaspoons black pepper'],
    },
    {
      id: 2,
      name: 'Meatloaf',
      ingredients: ['4 tablespoon olive oil', '1 pound ground beef', '2 eggs'],
    },
    {
      id: 3,
      name: 'Sweet Spicy Chicken',
      ingredients: ['1 tablespoon brown sugar', '4 pounds of chicken breast', '1 teaspoon seasoning salt', '2 teaspoons white pepper'],
    },
  ],
}

function recipes(state, action) {
  if(!state) state = initialState;
  // make a copy of the state
  const newState = { ...state };
  switch (action.type) {
    case 'INCREMENT':
        newState.counter = newState.counter + 1;
        newState.value = newState.value + 1;
        return newState;
    case 'DECREMENT':
        newState.counter = newState.counter - 1;
        newState.value = newState.value + 1;
        return newState;
    default:
      return newState;
  }
}

export default recipes;

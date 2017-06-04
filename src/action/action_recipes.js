/** RECIPE ACTION FACTORY **/

export function toggleRecipe(id) {
  return {
    type: 'TOGGLE_RECIPE',
    id
  };
}

export function likeRecipe(id) {
  return {
    type: 'LIKE_RECIPE',
    id
  };
}

export function addRecipe(item) {
  return {
    type: 'ADD_RECIPE',
    item
  };
}

export function editRecipe(item) {
  return {
    type: 'EDIT_RECIPE',
    item
  };
}

export function removeRecipe(index) {
  return {
    type: 'REMOVE_RECIPE',
    index
  };
}

/** FORM ACTION FACTORY **/

export function toggleNewForm() {
  return {
    type: 'TOGGLE_NEW_FORM'
  }
}

export function toggleEditForm(id) {
  return {
    type: 'TOGGLE_EDIT_FORM',
    id
  }
}

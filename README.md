# React-Redux RecipeBox

### To-Dos
1. App Structure
- [ ] RecipeList `default: displayed`: an index view where the names of all the recipes are visible.
  1. name: this.state.recipes.map((recipe) => {recipe.name})

- [ ] RecipeItem `default: hidden`: a recipe that has names and ingredients.
  - [ ] RecipeBox: a form of text inputs where users change values of existed recipe.
  - [ ] EditRecipe: a button to update existed recipes.
  - [ ] DeleteRecipe: a button to remove existed recipes.
- [ ] AddRecipe `default: displayed`: a button to create new recipes.
- [ ] RecipeForm `default: hidden`: a form of text inputs where users submit a new recipe.

2. States
- showAddForm: `bool` false
- showEditForm: `bool` false
- showRecipeItem: `bool` false

- recipes:
[{
  id: `number` 1,
  name: `string` 'Caramelized Onion Pork Chops',
  ingredients: `array` ['1 tablespoon vegetable oil', '4 pork loin chops', '3 teaspoons seasoning salt', '2 teaspoons black pepper'],
  }, ...
]

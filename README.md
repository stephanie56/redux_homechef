# React-Redux RecipeBox

An application built using React and Redux. This project is bootstrapped with create-react-app.

### Get Started

- git clone this repo https://github.com/stephanie56/redux_recipebox.git
- install node
- run `npm install`
- run `npm start` to start server on localhost:3000

### To-Dos
1. App Structure
- [x] RecipeList (displayed): an index view where the names of all the recipes are visible.

- [x] RecipeItem: a recipe that has names and ingredients.
  - [x] RecipeHeader (displayed)
  - [x] RecipeContent (hidden): onClick to display (recipe.showRecipeItem: false => true)
  - [ ] RecipeBox: a form of text inputs where users change values of existed recipe.
  - [ ] EditRecipe: a button to update existed recipes.
  - [ ] DeleteRecipe: a button to remove existed recipes.
- [ ] AddRecipe (displayed): a button to create new recipes.
- [ ] RecipeForm (hidden): a form of text inputs where users submit a new recipe.

2. States
- showAddForm: `false`
- showEditForm: `false`
- showRecipeItem: `false`
- recipes:
[<br>
{
  id: 1, <br>
  name: 'Caramelized Onion Pork Chops', <br>
  ingredients: ['1 tablespoon vegetable oil', '4 pork loin chops', '3 teaspoons seasoning salt', '2 teaspoons black pepper'],<br>
  }, ...
]

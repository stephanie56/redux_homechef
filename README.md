# React-Redux RecipeBox

Home Chef is a recipe app built using ReactJS and Redux. This project is bootstrapped with create-react-app.

### DEMO

Demo: https://stephanie56.github.io/redux_homechef/

*App Preview Screenshot*:

<img width="500" alt="Home Chef App Screenshot" style="text-align:left; margin-right:10px; display:inline;" src="./docs/screenshots/home.png">


### Get Started
1. Install Node
2. Clone this repo
```bash
git clone https://github.com/stephanie56/redux_recipebox.git
```
3. Install independencies
```bash
cd redux_recipebox
npm install
```
4. Start local server on port:3000
```bash
npm start
```
5. Open http://localhost:3000 in your browser


### To-Dos
- [x] RecipeList (displayed): an index view where the names of all the recipes are visible.

- [x] RecipeItem: a recipe that has names and ingredients.
  - [x] RecipeHeader (displayed)
  - [x] RecipeContent (hidden): onClick to display (recipe.showRecipeItem: false => true)
  - [x] RecipeBox: a form of text inputs where users change values of existed recipe.
  - [x] EditRecipe: a button to update existed recipes.
  - [x] DeleteRecipe: a button to remove existed recipes.
- [x] AddRecipe (displayed): a button to create new recipes.
- [x] RecipeForm (hidden): a form of text inputs where users submit a new recipe.

- [ ] Use router
- [ ] Slit reducer
- [ ] Hook up with remote database
- [ ] Only cache recipe id instead of the whole recipe


### States
- showAddForm: `bool`
- recipes:
```javascript
{
  id: 1,
  name: 'Caramelized Onion Pork Chops',
  imgUrl: "http://brightcove.vo.llnwd.net/d21/unsecured/media/1033249144001/201405/1567/1033249144001_3547969267001_Grilled-Pork-Chops.jpg?pubId=1033249144001",
  ingredients: ['1 tablespoon vegetable oil', '4 pork loin chops', '3 teaspoons seasoning salt', '2 teaspoons black pepper'],
  showRecipeItem: false,
  showEditForm: false,
  favorite: false
}
```

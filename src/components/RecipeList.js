import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleRecipe } from '.././action/action_recipes';
import { bindActionCreators } from 'redux';


// components
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
        <div className="recipe_list">
          {
              this.props.recipes.map((recipe, index) => {
              return (
                  <RecipeItem
                    key={recipe.id}
                    index={index}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    showRecipeItem={recipe.showRecipeItem}
                    onClick={() => this.props.toggleRecipe(recipe)}
                  />
              );
            })
          }
        </div>
    );
  }
}


// props for RecipeList
const mapStateToProps = (state) => ({
    recipes: state.recipes,
});

// methods that response to events triggered by users
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

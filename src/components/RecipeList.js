import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleRecipe } from '.././action/action_recipes'

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
                    toggleRecipe={this.props.toggleRecipe.bind(this)}
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
const mapDispatchToProps = (dispatch) => ({
  toggleRecipe: () => dispatch(toggleRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

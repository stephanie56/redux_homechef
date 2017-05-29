import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { incrementNum, decrementNum } from '.././action/action_counter'

// components
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
        <div className="recipe_list">
          {
              this.props.recipes.map((recipe) => {
              return (
                  <RecipeItem
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    showRecipeItem={recipe.showRecipeItem}
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
  increment: () => dispatch(incrementNum()),
  decrement: () => dispatch(decrementNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

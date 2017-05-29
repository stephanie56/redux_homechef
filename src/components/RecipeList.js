import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { incrementNum, decrementNum } from '.././action/action_counter'

class RecipeList extends Component {
  render() {
    return (
        <ul className="recipe_list">
          {
              this.props.recipes.map((recipe) => {
              return (
                <li key={recipe.id}>
                  {recipe.name}
                </li>
              );
            })
          }
        </ul>
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

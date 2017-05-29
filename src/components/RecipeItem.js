import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
// import { incrementNum, decrementNum } from '.././action/action_counter'

class RecipeItem extends Component {
  render() {
    return (
      <div className="recipeBox">
          <div className="boxHeader">
            <a href="#" >
              {this.props.name}
            </a>
          </div>

          <div>
            <h2>Ingredients</h2>
            <hr />
            <ul>
              {
                this.props.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>{ingredient}</li>
                  );
                })
              }
            </ul>
            <input type="button" value="Delete" />
            <input type="button" value="Edit" />
          </div>
        </div>
    );
  }
}

export default RecipeItem;

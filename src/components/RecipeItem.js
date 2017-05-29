import React, { Component } from 'react';
import className from 'classnames';

class RecipeItem extends Component {

  render() {
    let contentClasses = className({
        boxContent: true,
        hidden: !this.props.showRecipeItem, // hidden: true
      });

    return (
      <div className="recipe_item">
          <div className="boxHeader">
            <a href="#" >
              {this.props.name}
            </a>
          </div>

          <div className = {contentClasses}>
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

import React, { Component } from 'react';
import className from 'classnames';

class RecipeItem extends Component {

  render() {
    let contentClasses = className({
        recipe_content: true,
        hidden: !this.props.showRecipeItem, // hidden: true
      });

    return (
      <div className="recipe_item">
          <div className="recipe_header">
            <h4 onClick={() => this.props.toggleRecipe(this.props.id)}>
              {this.props.name}
            </h4>
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
            <input type="button" value="Delete" onClick={() => this.props.removeRecipe(this.props.index)}/>
            <input type="button" value="Edit" />
          </div>
        </div>
    );
  }
}

export default RecipeItem;

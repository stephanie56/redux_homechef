import React, { Component } from 'react';
import className from 'classnames';

import EditForm from '../containers/EditForm';

class RecipeItem extends Component {

  render() {
    let contentClasses = className({
        recipe_content: true,
        hidden: !this.props.showRecipeItem, // hidden: true
      });

    return (
      <div className="recipe_item">
          <EditForm
            id={this.props.id}
            index={this.props.index}
            name={this.props.name}
            ingredients={this.props.ingredients}
            showEditForm={this.props.showEditForm}
          />
          <div className="recipe_header">
            <h4 onClick={() => this.props.onToggle(this.props.id)}>
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
            <input type="button" value="Delete" onClick={() => this.props.onDelete(this.props.index)}/>
            <input type="button" value="Edit" onClick={() => this.props.onToggleEdit(this.props.id)}/>
            <input type="button" value="Like" onClick={() => this.props.onLike(this.props.id)}/>
          </div>
        </div>
    );
  }
}

export default RecipeItem;

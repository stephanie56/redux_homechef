import React, { Component } from 'react';
// import className from 'classnames';

class Form extends Component {
  render() {
    return(
      <div className="recipeform" >
        <form>
          <label>Recipe Name
            <input
              type="text"
              name="recipe_name"
              value={this.props.name}
              onChange={this.props.addName}
            />
          </label>
          <label>
            <input
              type="text"
              name="recipe_ingredients"
              value={this.props.ingredients}
              onChange={this.props.addIngredients}
            />
          </label>
          <input
            type="button"
            value="Submit"
          />
          <input
            type="button"
            value="Close"
          />
        </form>
      </div>
    )
  }
}

export default Form;

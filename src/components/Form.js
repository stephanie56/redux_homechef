import React, { Component } from 'react';
import className from 'classnames';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      ingredients: [],
    }
  }

  _updateName(e){
    this.setState({
      name: e.target.value
    });
  }

  _updateIngredients(e){
    this.setState({
      ingredients: e.target.value.split(',')
    });
  }

  _handleRecipeUpdate(e){
    e.preventDefault();
    let form = {
      id: this.state.name,
      name: this.state.name,
      ingredients: this.state.ingredients
    };
    // console.log(form);
    this.props.updateRecipe(form);
  }

  render() {
    let formClasses = className({
      recipeform: true,
      hidden: !this.props.showForm
    });

    return(
      <div className={ formClasses } >
        <form onSubmit={this._handleRecipeUpdate.bind(this)}>
          <label>Recipe Name
            <input
              type="text"
              name="recipe_name"
              value={this.state.name}
              onChange={this._updateName.bind(this)}
            />
        </label>
          <label>
            <input
              type="text"
              name="recipe_ingredients"
              value={this.state.ingredients}
              onChange={this._updateIngredients.bind(this)}
            />
          </label>
          <input
            type="submit"
            value="Submit"
          />
          <input
            type="button"
            value="Close"
            onClick={this.props.toggleForm}
          />
        </form>
      </div>
    )
  }
}

export default Form;

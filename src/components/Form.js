import React, { Component } from 'react';
import className from 'classnames';

class Form extends Component {
  constructor(props){
    super(props);
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

  _toggleForm(){
    this.props.toggleForm(this.props.id);
  }

  _handleRecipeUpdate(e){
    e.preventDefault();
    let form = {
      id: this.props.name,
      name: this.props.name,
      ingredients: this.props.ingredients
    };
    console.log(this.props.index);
    this.props.updateRecipe(form, this.props.index);
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
              value={this.props.name}
              onChange={this._updateName.bind(this)}
            />
        </label>
          <label>
            <input
              type="text"
              name="recipe_ingredients"
              value={this.props.ingredients}
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
            onClick={this._toggleForm.bind(this)}
          />
        </form>
      </div>
    )
  }
}

export default Form;

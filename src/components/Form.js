import React, { Component } from 'react';
import className from 'classnames';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
      ingredients: this.props.ingredients,
      imgUrl: this.props.imgUrl
    }
  }

  // onChange form input to update local state.name
  _updateName(e){
    this.setState({
      name: e.target.value
    });
  }

  // onChange form input to update local state.ingredients
  _updateIngredients(e){
    this.setState({
      ingredients: e.target.value.split(',')
    });
  }

  // onChange form input to update local state.imgUrl
  _updateImg(e){
    this.setState({
      imgUrl: e.target.value
    });
  }

  // Method to turn on/off form
  _toggleForm(){
    this.props.toggleForm(this.props.id);
  }

  // Method to submit updated recipe form
  _handleRecipeUpdate(e){
    e.preventDefault();
    let updatedRecipe = {
      id: this.props.name,
      name: this.state.name,
      imgUrl: this.state.imgUrl,
      ingredients: this.state.ingredients,
      favorite: this.props.favorite,
      isRecipeItemShown: false,
      isEditFormShown: false,
    };
    this.props.updateRecipe(updatedRecipe, this.props.index);
  }

  render() {
    let formClasses = className({
      recipeform: true,
      hidden: !this.props.isFormShown
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
          <label>Ingredients
            <input
              type="text"
              name="recipe_ingredients"
              value={this.state.ingredients}
              onChange={this._updateIngredients.bind(this)}
            />
          </label>
          <label>Recipe Image Url
            <input
              type="text"
              name="recipe_image"
              value={this.state.imgUrl}
              onChange={this._updateImg.bind(this)}
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

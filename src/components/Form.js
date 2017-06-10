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
    console.log(props.name, ' should show: ', this.props.name);
  }

  _updateName(e){
    this.setState({
      ...this.state,
      name: e.target.value
    });
  }

  _updateIngredients(e){
    this.setState({
      ...this.state,
      ingredients: e.target.value.split(',')
    });
  }

  _updateImg(e){
    this.setState({
      ...this.state,
      imgUrl: e.target.value
    });
  }

  _toggleForm(){
    this.props.toggleForm(this.props.id);
  }

  _handleRecipeUpdate(e){
    e.preventDefault();
    let form = {
      id: this.props.name,
      name: this.state.name,
      imgUrl: this.state.imgUrl,
      ingredients: this.state.ingredients,
      favorite: this.props.favorite,
      showRecipeItem: false,
      showEditForm: false,
    };
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

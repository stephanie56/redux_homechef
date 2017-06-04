import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleRecipe, toggleEditForm, likeRecipe, removeRecipe } from '.././action/action_recipes';

// components
import RecipeItem from './RecipeItem';

class RecipeList extends Component {

  // methods
  _handleToggle(id){
    this.props.toggleRecipe(id);
  }

  _handleToggleEdit(id){
    this.props.toggleEditForm(id);
  }

  _handleFavorite(id){
    this.props.likeRecipe(id);
  }

  _handleDelete(index){
    this.props.removeRecipe(index);
  }



  render() {
    return (
        <div className="recipe_list">
          {
              this.props.recipes.map((recipe, index) => {
              return (
                  <RecipeItem
                    key={index}
                    index={index}
                    name={recipe.name}
                    id={recipe.id}
                    ingredients={recipe.ingredients}
                    showRecipeItem={recipe.showRecipeItem}
                    onToggle={this._handleToggle.bind(this)}
                    onToggleEdit={this._handleToggleEdit.bind(this)}
                    onLike={this._handleFavorite.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                  />
              );
            })
          }
        </div>
    );
  }
}


// props for RecipeList
const mapStateToProps = (state) => ({
    recipes: state.recipes,
});

// methods that response to events triggered by users
const mapDispatchToProps = (dispatch) => ({
    toggleRecipe: (id) => dispatch(toggleRecipe(id)),
    toggleEditForm: (id) => dispatch(toggleEditForm(id)),
    likeRecipe: (id) => dispatch(likeRecipe(id)),
    removeRecipe: (index) => dispatch(removeRecipe(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

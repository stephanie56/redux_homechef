import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { toggleRecipe, toggleEditForm, likeRecipe, removeRecipe } from '../action/action_recipes';

// Components
import RecipeItem from '../components/RecipeItem';

class RecipeList extends Component {

  // Methods
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
              this.props.recipes.filter((recipe) => {
                return (this.props.visibilityFilter === 'SHOW_ALL' ? recipe : recipe.favorite === true);
                // return recipe.favorite === false;
              }).map((recipe, index) => {
              return (
                  <RecipeItem
                    key={index}
                    index={index}
                    name={recipe.name}
                    id={recipe.id}
                    imgUrl={recipe.imgUrl}
                    favorite={recipe.favorite}
                    ingredients={recipe.ingredients}
                    isRecipeItemShown={recipe.isRecipeItemShown}
                    isEditFormShown={recipe.isEditFormShown}
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
    visibilityFilter: state.visibilityFilter
});

// Methods that interact with recipe items and edit form
const mapDispatchToProps = (dispatch) => ({
    toggleRecipe: (id) => dispatch(toggleRecipe(id)),
    toggleEditForm: (id) => dispatch(toggleEditForm(id)),
    likeRecipe: (id) => dispatch(likeRecipe(id)),
    removeRecipe: (index) => dispatch(removeRecipe(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

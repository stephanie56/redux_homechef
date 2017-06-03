import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleRecipe, removeRecipe } from '.././action/action_recipes';

// components
import RecipeItem from './RecipeItem';

class RecipeList extends Component {

  // methods
  _handleToggle(id){
    console.log("current recipe id is: ", id);
    this.props.toggleRecipe(id);
  }

  _handleDelete(index){
    console.log("current recipe index is: ", index);
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
    removeRecipe: (index) => dispatch(removeRecipe(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

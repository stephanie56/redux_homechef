import React, { Component } from 'react';
import className from 'classnames';
import Form from './Form.js';
import EditForm from '../containers/EditForm';

class RecipeItem extends Component {

  render() {
    let contentClasses = className({
        recipe_content: true,
        hidden: !this.props.showRecipeItem, // hidden: true
      });

    return (
      <div className="recipe_item">
        {
          this.props.showEditForm ? (
            <EditForm
              index={this.props.index}
              id={this.props.id}
              name={this.props.name}
              ingredients={this.props.ingredients}
              imgUrl={this.props.imgUrl}
              favorite={this.props.favorite}
              showEditForm={this.props.showEditForm}
            />
          ) : null
        }


          <div className="recipe_header">
            <div className="recipe_img">
              <img src={this.props.imgUrl}/>
            </div>
            <div className="recipe_name">
              <h4 onClick={() => this.props.onToggle(this.props.id)}>
                {this.props.name}
              </h4>
            </div>
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

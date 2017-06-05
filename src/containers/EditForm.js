import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleEditForm, editRecipe } from '../action/action_recipes';

import Form from '../components/Form';

class EditForm extends Component {

  _editRecipe(item, index){
    this.props.editRecipe(item, index);
  }

  _toggleEditForm(id){
    this.props.toggleEditForm(id);
  }

  render(){
    return(
        <Form
          index={this.props.index}
          updateRecipe={this._editRecipe.bind(this)}
          toggleForm={this._toggleEditForm.bind(this)}
          showForm={this.props.showEditForm}
          id={this.props.id}
          name={this.props.name}
          ingredients={this.props.ingredients}
          imgUrl={this.props.imgUrl}
          favorite={this.props.favorite}
        />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditForm: (id) => dispatch(toggleEditForm(id)),
    editRecipe: (item, index) => dispatch(editRecipe(item, index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

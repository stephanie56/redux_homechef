import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleEditForm, editRecipe } from '../action/action_recipes';

import Form from '../components/Form';

class EditForm extends Component {

  _editRecipe(item){
    this.props.editRecipe(item);
  }

  _toggleEditForm(id){
    this.props.toggleEditForm(id);
  }

  render(){
    return(
        <Form
          updateRecipe={this._editRecipe.bind(this)}
          toggleForm={this._toggleEditForm.bind(this)}
          showForm={this.props.showEditForm}
          id={this.props.id}
          name={this.props.name}
          ingredients={this.props.ingredients}
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
    editRecipe: (item) => dispatch(editRecipe(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleEditForm } from '../action/action_recipes';

import Form from '../components/Form';

class EditForm extends Component {

  _addRecipe(item){
    this.props.addRecipe(item);
  }

  _toggleEditForm(id){
    this.props.toggleEditForm(id);
  }

  render(){
    return(
        <Form
          updateRecipe={this._addRecipe.bind(this)}
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
    toggleEditForm: (id) => dispatch(toggleEditForm(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleEditForm } from '../action/action_recipes';

import Form from '../components/Form';

class EditForm extends Component {

  _addRecipe(item){
    this.props.addRecipe(item);
  }

  _toggleEditForm(){
    this.props.toggleEditForm();
  }

  render(){
    return(
        <Form
          updateRecipe={this._addRecipe.bind(this)}
          toggleForm={this._toggleEditForm.bind(this)}
          showForm={this.props.showEditForm}
          name={this.props.name}
          ingredients={this.props.ingredients}
        />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    showEditForm: state.showEditForm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditForm: () => dispatch(toggleEditForm())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

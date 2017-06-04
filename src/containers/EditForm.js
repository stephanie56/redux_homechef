import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleEditForm } from '../action/action_recipes';

import Form from '../components/Form';

class EditForm extends Component {

  _addRecipe(item){
    this.props.addRecipe(item);
  }

  _toggleAddForm(){
    this.props.toggleNewForm();
  }

  render(){
    return(
        <Form
          updateRecipe={this._addRecipe.bind(this)}
          toggleForm={this._toggleAddForm.bind(this)}
          showForm={this.props.showEditForm}
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

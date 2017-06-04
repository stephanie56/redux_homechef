import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { addRecipe, toggleNewForm } from '../action/action_recipes';

import Form from '../components/Form';

class AddForm extends Component {

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
          showForm={this.props.showAddForm}
        />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    showAddForm: state.showAddForm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (item) => dispatch(addRecipe(item)),
    toggleNewForm: () => dispatch(toggleNewForm())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { addRecipe, toggleNewForm } from '../action/action_recipes';

// Component
import Form from '../components/Form';

class AddForm extends Component {

  // Method to turn on/off AddForm
  _toggleAddForm(){
    this.props.toggleNewForm();
  }

  // Method to push a new recipe object to state.recipes
  _addRecipe(item){
    this.props.addRecipe(item);
  }

  render(){
    return(
        <Form
          updateRecipe={this._addRecipe.bind(this)}
          toggleForm={this._toggleAddForm.bind(this)}
          isFormShown={this.props.isAddFormShown}
        />
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAddFormShown: state.isAddFormShown,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNewForm: () => dispatch(toggleNewForm()),
    addRecipe: (item) => dispatch(addRecipe(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

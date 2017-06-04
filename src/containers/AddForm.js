import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { addRecipe } from '../action/action_recipes';

import Form from '../components/Form';

class AddForm extends Component {

  _addRecipe(item){
    this.props.addRecipe(item);
  }

  render(){
    return(
        <Form
          updateRecipe={this._addRecipe.bind(this)}
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

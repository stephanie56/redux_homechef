import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { toggleNewForm } from '../action/action_recipes';

// import Form from '../components/Form';

class Controller extends Component {

  render(){
    return(
        <div className="control_pannel">
          <input
          type="button" value="Add Recipe"
          onClick={() => this.props.toggleNewForm()}
          />
          <input type="button" value="Filter"/>
        </div>
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
    toggleNewForm: () => dispatch(toggleNewForm())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);

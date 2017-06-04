import { connect } from 'react-redux';

// actions
import { addRecipe } from '../action/action_recipes';

import Form from '../components/Form';

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

const AddForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddForm;

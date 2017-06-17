// React
import React, { Component } from 'react';
import { connect } from 'react-redux';



// Styles & Components
import './stylesheets/App.css';
import AddForm from './containers/AddForm';
import RecipeList from './containers/RecipeList';
import Controller from './containers/Controller';

// import action
import { getCache } from './action/action_recipes';


const Header = () => (
  <div className="header">
    <h1>Home <i className="fa fa-cutlery"></i> Chef</h1>
  </div>
);

class App extends Component {
  componentWillMount(){
      this.props.getCache();
  }

  render(){
    return(
      <div>
        <Header />
        <div className="app">
          <AddForm />
          <RecipeList />
          <Controller />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCache: () => dispatch(getCache()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

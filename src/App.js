// React
import React, { Component } from 'react';
import { connect } from 'react-redux';



// Styles & Components
import './stylesheets/App.css';
import AddForm from './containers/AddForm';
import RecipeList from './containers/RecipeList';
import Controller from './containers/Controller';

// import action
import { initApp } from './action/action_recipes';


const Header = () => (
  <div className="header">
    <h1>Home <i className="fa fa-cutlery"></i> Chef</h1>
  </div>
);

class App extends Component {
  componentWillMount(){
      this.props.initApp();
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
    initApp: () => dispatch(initApp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

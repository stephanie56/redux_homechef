import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components & Styles
import './stylesheets/App.css';
import RecipeList from './components/RecipeList';
import AddForm from './containers/AddForm';
import EditForm from './containers/EditForm';
import Controller from './containers/Controller'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>Home <i className="fa fa-cutlery"></i> Chef</h1>
          <AddForm />
          <EditForm />
          <RecipeList />
          <Controller />
        </div>
      </Provider>
    );
  }
}

export default App;

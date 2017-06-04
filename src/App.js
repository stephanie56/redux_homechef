import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components & Styles
import './stylesheets/App.css';
import RecipeList from './components/RecipeList';
import AddForm from './containers/AddForm'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>React-Redux RecipeBox</h1>
          <AddForm />
          <RecipeList />
          <input type="button" value="Add Recipe" />
        </div>
      </Provider>
    );
  }
}

export default App;

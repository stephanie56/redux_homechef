import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components & Styles
import './stylesheets/App.css';
import RecipeList from './components/RecipeList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React-Redux RecipeBox</h1>
          <RecipeList />
        </div>
      </Provider>
    );
  }
}

export default App;

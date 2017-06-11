// React
import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from './store';

// Styles & Components
import './stylesheets/App.css';
import AddForm from './containers/AddForm';
import RecipeList from './containers/RecipeList';
import Controller from './containers/Controller';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>Home <i className="fa fa-cutlery"></i> Chef</h1>
      <AddForm />
      <RecipeList />
      <Controller />
    </div>
  </Provider>
);

export default App;

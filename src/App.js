// React
import React from 'react';


// Styles & Components
import './stylesheets/App.css';
import AddForm from './containers/AddForm';
import RecipeList from './containers/RecipeList';
import Controller from './containers/Controller';

const Header = () => (
  <div className="header">
    <h1>Home <i className="fa fa-cutlery"></i> Chef</h1>
  </div>
);

const App = () => (
    <div>
      <Header />
      <div className="app">
        <AddForm />
        <RecipeList />
        <Controller />
      </div>
    </div>
);

export default App;

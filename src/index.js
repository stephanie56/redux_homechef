// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import store from './store';

// Component
import App from './App';

export default class AppProvider extends Component {

  componentWillMount(){
      console.log('saved recipe is', localStorage.getItem('savedRecipes'));
  }

  componentWillUnMount(){
    localStorage.setItem('savedRecipes', JSON.stringify(store.getState().recipes));
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppProvider />, document.getElementById('root'));

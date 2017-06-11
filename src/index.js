// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';


// Store
import store from './store';

// Component
import App from './App';

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    })
  }
  render() {
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppProvider />, document.getElementById('root'));

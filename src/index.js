import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import App from './App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*console.log('STRIPE', process.env.REACT_APP_STRIPE_KEY);
console.log('STRIPE', process.env.NODE_ENV);*/

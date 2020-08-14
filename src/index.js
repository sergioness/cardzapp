import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/app/App'
import * as reducers from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title='Cardzapp'/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

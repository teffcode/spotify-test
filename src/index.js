// External libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise';

// Utils
import { headerUtils } from './utils';

// Component
import App from './components/App';

// Styles
import './index.scss';

// Actions
import { fetchUserSelf } from './actions';

// Reducers
import storeReducers from './reducers';

// Configurate middlewares for the store
const store = createStore(
  storeReducers,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

if (localStorage.accessToken) {
  // Set authorization header
  headerUtils.authorizationHeader(localStorage.accessToken);
  // Dispatch action to fetch user self
  store.dispatch(fetchUserSelf());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

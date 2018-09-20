// External libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise'; 
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

// Utils
import { headerUtils } from './utils';

// Component
import App from './containers/App';

// Styles
import './index.scss';

// Actions
import { fetchUserSelf } from './actions';

// Reducers
import storeReducers from './reducers';

// Configurate browser history
const history = createHistory();

// Intercept navigation actions
const routerSyncStoreMiddleware = routerMiddleware(history);

// Configurate middlewares for the store
const store = createStore(
  storeReducers,
  composeWithDevTools(applyMiddleware(promiseMiddleware, routerSyncStoreMiddleware))
);


if (localStorage.accessToken) {
  // Set authorization header
  headerUtils.authorizationHeader(localStorage.accessToken);
  // Dispatch action to fetch user self
  store.dispatch(fetchUserSelf());
}

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);

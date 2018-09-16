// External libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

// Container
import App from './containers/App';

// Styles
import './index.css';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Reducers
import storeReducers from './reducers';

// Configurate middlewares for the store
const storeMiddlewares = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={storeMiddlewares(storeReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

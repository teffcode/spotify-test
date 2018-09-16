// External libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise';

// Container
import App from './components/App';

// Styles
import './index.css';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Reducers
import storeReducers from './reducers';

// Configurate middlewares for the store
const store = createStore(
  storeReducers,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

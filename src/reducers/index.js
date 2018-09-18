// External libraries
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import userReducer from './user';
import tracksReducer from './tracks';

// Setup store
const store = combineReducers({
  user: userReducer,
  tracks: tracksReducer,
  router: routerReducer,
});

export default store;

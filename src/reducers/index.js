// External libraries
import { combineReducers } from 'redux';

// Reducers
import userReducer from './user';

// Setup store
const store = combineReducers({
  user: userReducer,
});

export default store;

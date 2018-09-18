// External libraries
import { combineReducers } from 'redux';

// Reducers
import userReducer from './user';
import tracksReducer from './tracks';

// Setup store
const store = combineReducers({
  user: userReducer,
  tracks: tracksReducer,
});

export default store;

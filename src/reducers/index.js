// External libraries
import { combineReducers } from 'redux';
import axios from 'axios';

// Utils
import { headerUtils } from '../utils';

// Reducers
import userReducer from './user';

// Action types
import types from '../actions/types';

// Setup store
const store = combineReducers({
  user: userReducer,
});

// Validate if user is authenticated
if (localStorage.jwt) {
  headerUtils.authorizationHeader(localStorage.jwt);
  // Read user self
  axios.get('https://api.spotify.com/v1/me')
    .then((res) => {
      store.dispatch(() => {
        return {
          type: types.FETCH_USER_SELF,
          payload: {
            displayName: res.display_name,
            email: res.email,
          }
        }
      });
    });
}

export default store;

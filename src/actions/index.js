// External libraries
import axios from 'axios';

// Action types
import types from './types';

// Config
import config from '../config'

const fetchUserSelf = () => {
  const request = axios.get(`${config.API_SPOTIFY_URL}/me`);

  return {
    type: types.FETCH_USER_SELF,
    payload: request,
  }
};

export {
  fetchUserSelf,
};

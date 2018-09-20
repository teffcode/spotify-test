// External libraries
import axios from 'axios';

// Action types
import types from './types';

// Config
import config from '../config'

// Utilities
import { headerUtils } from '../utils';

const fetchUserSelf = async () => {
  const request = await axios.get(`${config.API_SPOTIFY_URL}/me`);

  return {
    type: types.FETCH_USER_SELF,
    payload: request,
  }
};

const fetchTracks = async (term) => {
  const request = await axios.get(`${config.API_SPOTIFY_URL}/search?q=${term}&type=track&limit=10`);

  return {
    type: types.FETCH_TRACKS,
    payload: request,
  }
}

const logoutUser = async () => {
  headerUtils.authorizationHeader();
  localStorage.removeItem('accessToken');

  return {
    type: types.LOGOUT_USER,
    payload: {},
  }

}

export {
  fetchUserSelf,
  fetchTracks,
  logoutUser,
};

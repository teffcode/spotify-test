// External libraries
import axios from 'axios';

// Action types
import types from './types';

// Config
import config from '../config'

// Utilities
import { headerUtils } from '../utils';

const fetchUserSelf = async () => {
  let request;

  try{
    request = await axios.get(`${config.API_SPOTIFY_URL}/me`);
  } catch (err) {
    throw (err.message);
  }

  return {
    type: types.FETCH_USER_SELF,
    payload: request,
  }
};

const fetchTracks = async (term) => {
  let request;
  
  try{
    request = await axios.get(`${config.API_SPOTIFY_URL}/search?q=${term}&type=track&limit=10`);
  } catch (err) {
    throw (err.message);
  }

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

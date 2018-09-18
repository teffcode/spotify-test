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

const fetchTracks = (term) => {
  const request = axios.get(`${config.API_SPOTIFY_URL}/search?q=${term}&type=track&limit=10`);

  return {
    type: types.FETCH_TRACKS,
    payload: request,
  }
}

export {
  fetchUserSelf,
  fetchTracks,
};

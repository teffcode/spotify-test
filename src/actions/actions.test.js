import axios from 'axios';

import { fetchUserSelf, fetchTracks, logoutUser } from './index';
import types from './types';
import config from '../config'

describe('actions', () => {

  it('fetchUserSelf', () => {
    const request = axios.get(`${config.API_SPOTIFY_URL}/me`);
    const expectedAction = {
      type: types.FETCH_USER_SELF,
      payload: request
    }

    expect(fetchUserSelf).to.eql(expectedAction)
  })

  it('fetchTracks', () => {
    const request = axios.get(`${config.API_SPOTIFY_URL}/search?q=${term}&type=track&limit=10`);
    const expectedAction = {
      type: types.FETCH_TRACKS,
      payload: request
    }

    expect(fetchTracks('moderat')).to.eql(expectedAction)
  })

  it('logoutUser', () => {
    const expectedAction = {
      type: types.LOGOUT_USER,
      payload: {}
    }

    expect(logoutUser).to.eql(expectedAction)
  })

});
// External dependencies
import _ from 'lodash';

// Action types
import types from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_TRACKS:
      if (!action.payload.data) return state;
      return _.mapKeys(action.payload.data.tracks.items, 'id');
    default:
      return state;
  }
}
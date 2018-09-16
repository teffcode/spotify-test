// Action types
import types from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_USER_SELF:
      break;
    default:
      return state;
  }
}
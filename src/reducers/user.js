// Action types
import types from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_USER_SELF:
      return { ...state, ...action.payload}
    default:
      return state;
  }
}
// Action types
import types from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_USER_SELF:
      return {
        ...state,
        displayName: action.payload.data.display_name,
        email: action.payload.data.email,
      }
    case types.LOGOUT_USER:
      return {}
    default:
      return state;
  }
}
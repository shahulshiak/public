import {AUTH_FAILURE, AUTH_SUCCESS} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, isAuthenticated: true};
    case AUTH_FAILURE:
      return {...state, isAuthenticated: false};
    default:
      return state;
  }
};

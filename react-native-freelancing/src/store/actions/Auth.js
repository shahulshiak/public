import {AUTH_SUCCESS, AUTH_FAILURE, AUTHENTICATE} from './actionTypes';

export const authenticate = (credentials) => ({
  type: AUTHENTICATE,
  credentials
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authFailure = () => ({
  type: AUTH_FAILURE,
});

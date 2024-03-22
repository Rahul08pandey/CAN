import {LOGIN_SUCCESS, LOGOUT, SET_STATES, FORUM_DATA} from './actionTypes';

export const loginSuccess = credentials => ({
  type: LOGIN_SUCCESS,
  payload: credentials,
});

export const setStates = states => ({
  type: SET_STATES,
  payload: states,
});

export const logout = () => ({
  type: LOGOUT,
});

export const forumDetails = data => ({
  type: FORUM_DATA,
  payload: data,
});

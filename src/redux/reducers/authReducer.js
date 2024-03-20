import {LOGIN_SUCCESS, LOGOUT, SET_STATES} from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  states: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        // isAuthenticated: false,
      };

    case SET_STATES:
      return {
        ...state,
        error: null,
        loading: false,
        states: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

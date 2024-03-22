import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_STATES,
  FORUM_DATA,
} from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  states: [],
  forumDetails: {},
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
      };

    case SET_STATES:
      return {
        ...state,
        error: null,
        loading: false,
        states: action.payload,
      };

    case FORUM_DATA:
      return {
        ...state,
        forumDetails: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

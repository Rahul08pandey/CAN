import {combineReducers} from 'redux';
import authReducer from './authReducer';
import forumSlice from './forumSlice';
import portfolioSlice from './portfolioSlice';
import {clientApi} from '../services/clientApi';

const rootReducer = combineReducers({
  auth: authReducer,
  forum: forumSlice,
  portfolio: portfolioSlice,
  [clientApi.reducerPath]: clientApi.reducer,
});

export default rootReducer;

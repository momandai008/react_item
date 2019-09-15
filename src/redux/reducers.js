
import { combineReducers } from 'redux';

import { SAVE_USER } from './action-types';
import { setItem, getItem } from '../utils/storage';



const initUser = {
  user: getItem('user') || {},
  token: getItem('token') || ''
};

function user(prevState = initUser, action) {
  switch (action.type) {
    case SAVE_USER :
      setItem('user', action.data.user);
      setItem('token', action.data.token);
      return action.data;
    default :
      return prevState;
  }
}

function xxx(prevState = {}, action) {
  switch (action.type) {
    default :
      return prevState;
  }
}

export default combineReducers({
  user,
  xxx
})
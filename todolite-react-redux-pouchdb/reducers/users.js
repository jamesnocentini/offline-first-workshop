import {FETCH_USERS, SHARE_LIST} from '../constants/ActionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    case SHARE_LIST:
      return 
      [...state.users, action.user];
    default:
      return state;
  }
}
import * as types from '../constants/ActionTypes';

export function shareWithUser(id) {
  return {type: types.SHARE_TASK, user_id: id};
}
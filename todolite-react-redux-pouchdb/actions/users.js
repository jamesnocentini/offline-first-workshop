import * as types from '../constants/ActionTypes';
import db, {mapDocsFromPouch} from './db';

export function fetchUsers() {
  return db.find({
    selector: {type: "user"}
  }).then(function (res) {
    return {
      type: types.FETCH_USERS,
      users: res.docs
    }
  }).catch((err) => {
    throw err
  });
}

export function shareList(user) {
  return db.get('tallinn', function (err, doc) {
    if (err) {
      return console.log(err);
    }
    db.put({
      _id: 'tallinn',
      _rev: doc._rev,
      members: [...doc.members, user._id]
    }).then(list => {
      return {
        type: types.SHARE_LIST,
        user: user
      };
    }).catch(err => {
      throw err;
    })
  });
}
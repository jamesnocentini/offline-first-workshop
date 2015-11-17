import db from './db';

var SYNC_GATEWAY_URL = 'http://localhost:4984/todos/';

export function startSync() {
  var options = {live: true};
  db.replicate.to(SYNC_GATEWAY_URL, options, function (err) {
    console.log(err);
  });
  db.replicate.from(SYNC_GATEWAY_URL, options, function (err) {
    console.log(err);
  });
}

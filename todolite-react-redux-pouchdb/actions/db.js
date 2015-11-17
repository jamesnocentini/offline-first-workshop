import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'
import {store} from './../containers/App';
import {fetchUsers} from './users';
import {fetchTodos} from './todos';

PouchDB.plugin(PouchDBFind);
let db = new PouchDB('app');

db.createIndex({index: {fields: ['type']}})
  .then(function (res) {
    console.log(res)
  }).catch((err) => {
  throw err
});

export function mapDocsFromPouch(records) {
  if (!!!records) {
    return {};
  }

  return records.rows.map(record => record.doc);
}

db.changes({
  live: true,
  include_doc: true,
  since: 'now'
}).on('change', changeCallback.bind(this))
  .on('error', console.log.bind(console));

function changeCallback(change) {
  store.dispatch(fetchUsers());
  store.dispatch(fetchTodos());
}

// Only for debugging
window.PouchDB = PouchDB;
window.db = db;

export default db;
import * as types from '../constants/ActionTypes';
import db, {mapDocsFromPouch} from './db';

export function fetchTodos() {
  return db.find({
    selector: {type: "todo"}
  }).then(function (res) {
    return {
      type: types.FETCH_TODOS,
      todos: res.docs
    }
  }).catch(err => {
    throw err
  });
}

export function addTodo(text) {
  var userProperties = {
    text: text,
    type: 'todo'
  };
  return db.post(userProperties).then((res) => {
    var document = Object.assign(userProperties, res);
    return {
      type: types.ADD_TODO,
      todo: document
    }
  }).catch(err => {throw err});
}

export function deleteTodo(id) {
  return {type: types.DELETE_TODO, id};
}

export function editTodo(id, text) {
  return {type: types.EDIT_TODO, id, text};
}

export function completeTodo(id) {
  return {type: types.COMPLETE_TODO, id};
}

export function completeAll() {
  return {type: types.COMPLETE_ALL};
}

export function clearCompleted() {
  return {type: types.CLEAR_COMPLETED};
}
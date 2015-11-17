import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'
import { persistentReducer } from 'redux-pouchdb';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      );
    default:
      return state;
  }
};
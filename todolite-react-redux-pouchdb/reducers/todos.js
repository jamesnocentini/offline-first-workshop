import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, FETCH_TODOS } from '../constants/ActionTypes'

const initialState = [];

export default function todos(state = initialState, action) {
  console.log("reducer" + JSON.stringify(action));
  switch (action.type) {
    case FETCH_TODOS:
      return action.todos;
    case ADD_TODO:
      return [
        action.todo,
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
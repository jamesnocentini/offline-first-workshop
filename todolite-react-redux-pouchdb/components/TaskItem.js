import React, { Component, PropTypes } from 'react';

class TaskItem extends Component {
  render() {
    const { todo, completeTodo } = this.props;
    return (
      <li className="list-group-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo._id)} /> {todo.text} - by {todo.created_by || 'Guest'}
      </li>
    );
  }
}

export default TaskItem;
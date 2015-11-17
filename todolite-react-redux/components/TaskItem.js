import React, { Component, PropTypes } from 'react';

class TaskItem extends Component {
  render() {
    const { todo, completeTodo } = this.props;
    return (
      <li className="list-group-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)} /> {todo.text}
      </li>
    );
  }
}

export default TaskItem;
import React, { PropTypes, Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    const { todos, actions } = this.props;
    console.log(todos)
    return (
      <div className="col-md-6">
        <h1>Tasks</h1>
        <ul className="list-group">
          {todos.map(todo =>
            <TaskItem key={todo._id} todo={todo} {...actions} />
          )}
        </ul>
      </div>
    );
  }
}

export default TaskList;
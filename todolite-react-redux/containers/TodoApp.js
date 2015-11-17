import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header';
import * as TodoActions from '../actions/todos'
import TaskList from '../components/TaskList';

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;
    console.log("the documents are" + JSON.stringify(todos));
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                  <input type="text" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default">Login</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <Header addTodo={actions.addTodo}/>
          <div className="row">
            <TaskList todos={todos} actions={actions} />
            <div className="col-md-6">
              <h1>Users</h1>
              {this.renderUsers()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderUsers() {
    return (
      <ul className="list-group">
        {this.props.users.map(user =>
          <li className="list-group-item">
            <input
              onChange={() => shareWithUser(user.id)}
              type="checkbox"/> {user}
          </li>
        )}
      </ul>
    );
  }
}

TodoApp.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

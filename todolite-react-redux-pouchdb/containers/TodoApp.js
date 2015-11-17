import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header';
import * as TodoActions from '../actions/todos'
import * as UsersActions from '../actions/users';
import TaskList from '../components/TaskList';
import { fetchUsers } from '../actions/users';
import { store } from './App';
import UserList from '../components/UserList';

class TodoApp extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //var {dispatch} = this.props
    this.props.actions.fetchUsers();
    this.props.actions.fetchTodos();
  }

  render() {
    const { todos, actions, users } = this.props;
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name"/>
                  <input type="text" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default">Login</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <Header addTodo={actions.addTodo}/>
          <div className="row">
            <TaskList todos={todos} />
            <UserList users={users} {...actions} />
          </div>
        </div>
      </div>
    )
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
  var actions = Object.assign(TodoActions, UsersActions);
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

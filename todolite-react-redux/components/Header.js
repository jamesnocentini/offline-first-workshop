import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div>
        <h1>New Task</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave.bind(this)}
                       placeholder="What needs to be done?" />
        <div></div>
      </div>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
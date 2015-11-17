import React, {Component, PropTypes} from 'react';

class UserList extends Component {
  render() {
    var { users, shareList } = this.props;
    return (
      <div className="col-md-6">
        <h1>Users</h1>
        <ul className="list-group">
          {users.map(user =>
            <li key={user._id} className="list-group-item">
              {user.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default UserList;
import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'

export default combineReducers({
  todos,
  users
})
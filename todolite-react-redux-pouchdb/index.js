import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import {startSync} from './actions/sync';

startSync();

render(
  <App />,
  document.getElementById('root')
);
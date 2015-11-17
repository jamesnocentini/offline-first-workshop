import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import reducer from '../reducers/index'
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk, promise),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export const store = finalCreateStore(reducer);

if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(combineReducers(require('../reducers')))
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TodoApp />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={true}/>
        </DebugPanel>
      </div>
    );
  }
}

export default App;
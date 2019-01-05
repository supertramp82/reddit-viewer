import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Subreddit from './components/Subreddit';
import { feedReducer } from './reducers/feedReducer';

const store = createStore(
  combineReducers({
    settings: feedReducer,
  })
);

let feed = 'sports';

class App extends React.Component {
  render() {
    return <Subreddit feed={store.getState().settings.feed} />;
  }
}

const rootElement = document.getElementById('root');
const _app = ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

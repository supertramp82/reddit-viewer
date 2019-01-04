import React from 'react';
import ReactDOM from 'react-dom';

import Subreddit from './components/Subreddit';

class App extends React.Component {
  render() {
    return <Subreddit />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

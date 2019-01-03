import React from 'react';
import ReactDOM from 'react-dom';

import Title from './Title';
import Thumbnail from './Thumbnail';
import Comments from './Comments';
import Time from './Time';
import Url from './Url';

function Subreddit() {
  return (
    <div className="subreddit">
      Subreddit
      <Title />
      <Thumbnail />
      <Comments />
      <Time />
      <Url />
    </div>
  );
}

export default Subreddit;

import React from 'react';
import { connect } from 'react-redux';

import { setFeed } from '../actions/feedActions';

class Feeds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [
        'news',
        'AskReddit',
        'politics',
        'worldnews',
        'sports',
        'legaladvice',
        'games',
        'todayilearned',
        'IdiotsInCars',
        'theydidthemath',
      ],
    };

    this.changeFeed = this.changeFeed.bind(this);
  }

  changeFeed(e) {
    this.props.dispatch(setFeed(e.target.value));
  }

  render() {
    const items = this.state.feeds.map(feed => {
      return <option value={feed}>{feed}</option>;
    });

    return (
      <div className="feed">
        Select your feed:{' '}
        <select id="selectFeed" onChange={this.changeFeed}>
          {items}
        </select>
      </div>
    );
  }
}

export default connect()(Feeds);

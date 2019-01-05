import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import axios from 'axios';
import { connect } from 'react-redux';

import Feeds from './Feeds';
import Title from './Title';
import Thumbnail from './Thumbnail';
import Comments from './Comments';
import Time from './Time';
import Url from './Url';
import Author from './Author';

class Subreddit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subs: [],
    };
  }

  componentDidMount() {
    let feed = this.props.feed;

    this.getReddit();
    // this.interval = setInterval(() => {
    //   this.getReddit();
    // }, 5000);
  }

  componentWillUpdate() {}

  componentWillReceiveProps(props) {
    this.getReddit(props.feed);
    this.forceUpdate();
  }

  getReddit(feed) {
    axios
      .get(
        `https://www.reddit.com/r/${
          feed ? feed : 'news'
        }/search.json?q=news&restrict_sr=1`
      )
      // .then(res => {
      //   return res.json();
      // })
      .then(res => {
        // console.log(res);
        this.setState({
          subs: res.data.data.children,
        });
      })
      .catch(error => console.log(error));
    this.forceUpdate();
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    let subs = this.state.subs;

    if (subs.length === 0) return <div />;
    else {
      let items = subs.map(sub => {
        const {
          title,
          permalink,
          url,
          author,
          created_utc,
          num_comments,
          thumbnail,
        } = sub.data;

        return (
          <div className="subreddit">
            <div className="column15">
              <Thumbnail thumbnail={thumbnail} />
            </div>
            <div className="column80">
              <Title title={title} />
              <Url url={url} />
              <Author author={author} />
              <Time timestamp={created_utc} />
              <Comments comments={num_comments} />
            </div>
          </div>
        );
      });

      return (
        <React.Fragment>
          <Feeds />
          {items}
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    feed: state.settings.feed,
  };
};

export default connect(mapStateToProps)(Subreddit);

import React from 'react';
import ReactDOM from 'react-dom';

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
    this.getReddit();
    // this.interval = setInterval(() => {
    //   this.getReddit();
    // }, 15000);
  }

  getReddit() {
    fetch(
      'https://www.reddit.com/r/news/search.json?q=news&restrict_sr=1'
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          subs: res.data.children,
        });
        this.forceUpdate();
      });
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    let subs = this.state.subs;

    if (subs.length === 0) return <div />;
    else {
      let items = subs.map(sub => {
        //console.log(sub.data);
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
            <Title title={title} />
            <Thumbnail thumbnail={thumbnail} />
            <Comments comments={num_comments} />
            <Time timestamp={created_utc} />
            <Url url={url} />
            <Author author={author} />
          </div>
        );
      });
      return <React.Fragment>{items}</React.Fragment>;
    }
  }
}

export default Subreddit;

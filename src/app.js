import React from 'react';
import ReactDOM from 'react-dom';

import Subreddit from './components/Subreddit';

class App extends React.Component {
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
        console.log(sub.data);
        const {
          title,
          permalink,
          url,
          author,
          created_utc,
          num_comments,
          thumbnail,
        } = sub.data;

        //     return (
        //       <div key={created_utc}>
        //         {title} | {permalink} | {url} | {author} | {created_utc}{' '}
        //         | {num_comments} | {thumbnail}
        //         <br />
        //         <br />
        //       </div>
        //     );
      });

      //  return <React.Fragment>{items}</React.Fragment>;

      return <Subreddit />;
    }
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

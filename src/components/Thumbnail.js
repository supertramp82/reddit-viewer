import React from 'react';

function Thumbnail({ thumbnail }) {
  const empty = ['self', 'default', ''].some(v => thumbnail === v);
  return (
    <div className="thumbnail">
      {empty ? (
        <i className="fa fa-link" />
      ) : (
        <img height="70px" src={thumbnail} />
      )}
    </div>
  );
}

export default Thumbnail;

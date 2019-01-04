import React from 'react';

function Thumbnail({ thumbnail }) {
  return (
    <div className="thumbnail">
      {thumbnail == '' ? '' : <img src="thumbnail" />}
    </div>
  );
}

export default Thumbnail;

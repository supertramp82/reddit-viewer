import React from 'react';

function Url({ url }) {
  return (
    <div className="url">
      <a href={url}>{url}</a>
    </div>
  );
}

export default Url;

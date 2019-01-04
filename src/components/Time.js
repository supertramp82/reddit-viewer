import React from 'react';
import moment from 'moment';

function Time({ timestamp }) {
  const iso = new Date(+timestamp * 1000)
    .toISOString()
    .match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);

  return (
    <div className="time">
      {iso[1]} {iso[2]}
    </div>
  );
}

export default Time;

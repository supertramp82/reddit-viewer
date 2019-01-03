import React from 'react';
import moment from 'moment';

function Time() {
  const iso = new Date(1543346954 * 1000)
    .toISOString()
    .match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);

  return (
    <div className="time">
      {iso[1]} {iso[2]}
    </div>
  );
}

export default Time;

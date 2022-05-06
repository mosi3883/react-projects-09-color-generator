import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  return (
    <article
      className={`color ${index > 10 ? 'color-light' : ''}`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;

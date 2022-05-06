import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hex}`;

  useEffect(() => {
    let timer;
    if (alert) {
      timer = setTimeout(() => {
        setAlert(false);
      }, 2500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 ? 'color-light' : ''}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

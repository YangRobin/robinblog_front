
import React from 'react';
import style from './style';

const Row = (props) => {
  return (
    <div {...props} className={`${style.row} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Row;

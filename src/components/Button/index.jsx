
import React from 'react';
import style from './style';

const Button = props => (
  <button type="button" className={`${style.btn} ${style[props.type]}`}>
    {props.children}
  </button>
);

export default Button;

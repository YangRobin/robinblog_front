
import React from 'react';
import style from './style';

const Layout = props => (
  <div className={style.wrapper}>
    {props.children}
  </div>
);

export default Layout;

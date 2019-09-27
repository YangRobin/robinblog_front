
import React from 'react';
import style from './style';

const Layout = props => {
  const { type = '', children } = props;
  return (
    <div className={style[type]}>
      {children}
    </div>
  )
}

export default Layout;

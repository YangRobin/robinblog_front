import React from 'react';

const Icon = (props) => {
  const { type } = props;
  return (<i {...props} className={`iconfont  ${type}`}>{props.children}</i>)
}

export default Icon
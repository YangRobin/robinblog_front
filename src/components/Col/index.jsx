import React from 'react';

const Col = (props) => {
  const { span, style, children } = props;
  return <div {...props} style={{ width: `${span / 24 * 100}%` ,...style }}> {children}</div>
}
export default Col;
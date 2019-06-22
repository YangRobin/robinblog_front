
import React from 'react';
import style from './style'
const Row = props => {

  console.log(props)
  return (
    <div className={style.row} style={{}}>
      {props.children}
    </div>
  )
}

export default Row;
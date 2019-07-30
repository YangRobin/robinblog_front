import React from 'react'
import style from './style'
import Button from '../../components/Button';

const Card = (props) => {

  const { data } = props;
  console.log(props)

  // let open = () => {

  // }

  return (
    <div className={style.card}>
      <h3>{data.title}</h3>
      <div>
        <img src="resource/son.jpg" alt="" />
        <p>
          {data.content}
        </p>
      </div>
      <div className={style.optbar}>
        <Button type="default">open</Button>
      </div>
    </div>
  )
}

export default Card;
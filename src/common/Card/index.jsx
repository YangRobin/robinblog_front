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
      <div className={style.top}>
        <h4 className={style.title}>{data.title}</h4>
        <div className={style.content}>
          <img className={style.img} src="http://photocdn.sohu.com/20150720/mp23212374_1437359294847_2.jpeg" alt="" />
          <p className={style.text}>
            {data.content}
          </p>
        </div>
      </div>
      <div className={style.optbar}>
        <Button type="default">open</Button>
      </div>
    </div>
  )
}

export default Card;
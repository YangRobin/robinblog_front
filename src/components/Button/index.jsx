
import React from 'react';
import style from './style'

const Button = (props) => {

	return (
		<button className={style.btn + " " + style[props.type]}>
			{props.children}
		</button>
	)
}

export default Button;
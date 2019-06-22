
import React from 'react'
import style from './style'
const Layout = props => {
	return (
		<div className={style.wrapper}>
			{props.children}
		</div>
	)
}

export default Layout;
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Icon } from '../../../../components/robin';
import style from './style.less';

const Menu = (props) => {

  const { routes, location } = props;
  const [hash, setHash] = useState('');
  useEffect(() => {
    setHash(location.pathname);
  })

  return (
    <ul className={style.menu}>
      {routes.map(i => {
        if (!i.notRender) {
          return (
            <li key={i.name} className={i.path === hash ? style.active : ''}>
              <Link to={i.path}> <Icon style={{ marginRight: '15px' }} type={i.icon} />   {i.name}</Link>
            </li>
          )
        }
        return '';
      })}
    </ul>
  )
}

export default withRouter(Menu);

import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import style from './style'
import { querySecrchList } from '../../api';
import CommonContext from '../../pages/index/commonContext';


const Header = () => {

  const [listVisible, setListVisible] = useState(false);
  // const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const { state, setState } = useContext(CommonContext);

  const textChange = e => {
    setState({
      ...state,
      query: e.target.value,
    })
    // querySecrchList().then(res => {
    //   setSearchList(res)
    // })
    if (e.target.value) {
      setListVisible(true);
    }
  }

  const enterSearch = () => {
    if (!state.query) {
      return;
    }
    setListVisible(true);
  }

  const leaveSearch = () => {
    setListVisible(false);
  }

  return (
    <div className={style.header}>
      <div className={style.left}>
        <a className={style.logo} href="#">学生网</a>
      </div>
      <div className={style.right}>
        <div className={style.holder} onMouseLeave={leaveSearch} onMouseEnter={enterSearch}>
          <input
            value={state.query || ''}
            type='text'
            onChange={textChange}
          />
          {
            listVisible ?
              <ul className={style.searchList}>
                {
                  searchList.map(i => {
                    return <li key={i.id + Math.random().toFixed(2)}>{i.name}</li>
                  })
                }
              </ul> : ''
          }
        </div>
      </div>
    </div>
  )
}
export default withRouter(Header);
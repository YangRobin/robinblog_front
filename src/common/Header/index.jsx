
import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import { Wrapper, Row, Col } from '../../components/robin'
import style from './style'
import { querySecrchList } from '../../api';

console.log(querySecrchList)

const Header = props => {
  const [listVisible, setListVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const textChange = e => {
    setSearchText(e.target.value);
    querySecrchList().then(res => {
      setSearchList(res)
    })
    if (e.target.value) {
      setListVisible(true);
    }
  }
  const enterSearch = () => {
    if (!searchText) {
      return;
    }
    setListVisible(true);
  }
  const leaveSearch = () => {
    setListVisible(false);
  }
  const onEnterPressed = (e) => {
    if (e && e.keyCode === 13) {
      setListVisible(false);
      props.history.push(`/search/${searchText}`);
    }
  }
  return (
    <div className={style.header}>
      <Wrapper>
        <Row>
          <Col span={4}>
            <a className={style.logo} href="#">学生网</a>
          </Col>
          <Col span={14}>
            <div className={style.holder} onMouseLeave={leaveSearch} onMouseEnter={enterSearch}>
              <input onKeyUp={onEnterPressed} value={searchText} type='text' onChange={textChange} />
              {
                listVisible ?
                  <ul className={style.searchList}>
                    {
                      searchList.map(i => {
                        return <li key={i.name}>{i.name}</li>
                      })
                    }
                  </ul> : ''
              }
            </div>
          </Col>
        </Row>
      </Wrapper>
    </div>
  )
}
export default withRouter(Header);
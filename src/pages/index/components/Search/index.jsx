
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { queryArticle } from '../../../../api';
import { Row, Col, Icon } from '../../../../components/robin';
import style from './style';
import Pager from '../../../../components/Pager';

const Search = props => {
  console.log(props)
  const [state, setstate] = useState({ articleList: [], count: {}, activeIndex: 0, page: 1 })
  const typeCount = list => {
    const arr = {};
    arr.all = list.length;
    list.forEach(i => {
      if (arr[i.type]) {
        arr[i.type] += 1;
      } else {
        arr[i.type] = 1;
      }
    })
    return arr;
  }
  useEffect(() => {
    queryArticle().then(res => {
      const count = typeCount(res);
      setstate({
        ...state,
        count,
        articleList: res,
      })
    })
  }, [])
  const changIndex = index => {
    setstate({
      ...state,
      activeIndex: index,
    })
  }
  const renderList = list => {
    return list.map(i => {
      return (
        <li className={style.article} key={i.id}>
          <Row>
            <Col span={14}>
              <Link to="#" className={style.title}>{i.title}</Link>
              <p className={style.description}>{i.descripton}</p>
              <p className={style.author}>
                <span>{i.author}</span>
                <span> {Moment(i.createTime).format("YYYYMMDD")}</span>
              </p>
            </Col>
            <Col style={{ lineHeight: '74px' }} span={6}>
              <span className={style.type}>{i.subject}</span>
            </Col>
            <Col style={{ lineHeight: '74px' }} span={6}>
              <Icon type="icon-star" style={{ color: "#20b876", fontWeight: 'bold' }}>{i.stars}</Icon>
            </Col>
          </Row>
        </li>
      )
    })
  }

  const pageChange = page => {
    console.log(page)
    setstate({
      ...state,
      page,
    })
  }

  return (
    <div className={style.articleList}>
      <div>
        <p>找到<span className={style.total}>{state.articleList.length}</span>条结果</p>
        <ul className={style.filter}>
          {
            Object.keys(state.count).map((i, index) => {
              return (
                <li
                  key={i}
                  onClick={() => { changIndex(index) }}
                  className={state.activeIndex === index ? style.active : ''}
                >
                  {i} <span className={style.sum}>{state.count[i]}</span>
                </li>
              )
            })
          }
        </ul>
        <Pager total={50} pageSize={5} page={state.page} pageChange={pageChange} />
      </div>
      <ul>
        {renderList(state.articleList)}
      </ul>
    </div>
  )
}

export default Search;
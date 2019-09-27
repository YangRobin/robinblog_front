import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Moment from 'moment';
// import { queryArticle } from '../../../../api';
import { Row, Col, Icon, Wrapper } from '../../../../components/robin';
import style from './style';
// import Pager from '../../../../components/Pager';
// import CommonContext from '../../commonContext';
import { useRecommendListHooks } from '../../hooks/useHttp';
import Card from '../../../../common/Card';

const Home = () => {

  // const ctx = useContext(CommonContext)
  const [list, setList] = useRecommendListHooks('', []);
  console.log(list)
  // const [state, setstate] = useState({
  //   articleList: [],
  //   count: {},
  //   activeIndex: 0,
  //   Fpage: 1,
  //   query: '',
  // })


  // const typeCount = list => {
  //   const arr = {};
  //   arr.all = list.length;
  //   list.forEach(i => {
  //     if (arr[i.type]) {
  //       arr[i.type] += 1;
  //     } else {
  //       arr[i.type] = 1;
  //     }
  //   })
  //   return arr;
  // }

  // useEffect(() => {
  //   queryArticle().then(res => {
  //     const count = typeCount(res);
  //     setstate({
  //       ...state,
  //       count,
  //       articleList: res,
  //     })
  //   })
  // }, [ctx])

  // const renderList = list => {
  //   return list.map(i => {
  //     return (
  //       <li className={style.article} key={i.id}>
  //         <Row>
  //           <Col span={14}>
  //             <Link to="#" className={style.title}>{i.title}</Link>
  //             <p className={style.description}>{i.descripton}</p>
  //             <p className={style.author}>
  //               <span>{i.author}</span>
  //               <span> {Moment(i.createTime).format("YYYYMMDD")}</span>
  //             </p>
  //           </Col>
  //           <Col style={{ lineHeight: '74px' }} span={6}>
  //             <span className={style.type}>{i.subject}</span>
  //           </Col>
  //           <Col style={{ lineHeight: '74px' }} span={6}>
  //             <Icon type="icon-star" style={{ color: "#20b876", fontWeight: 'bold' }}>{i.stars}</Icon>
  //           </Col>
  //         </Row>
  //       </li>
  //     )
  //   })
  // }

  // const pageChange = page => {
  //   setstate({
  //     ...state,
  //     page,
  //   })
  // }

  const renderList = param => {
    console.log("param",param)
    // const tree = [];
    // for (let i = 0; i < param.length; i += 2) {
    //   tree.push(
    //     <Row>
    //       <Col span={12} style={{marginRight:"20px"}}>
    //         <Card data={param[i]} />
    //       </Col>
    //       <Col span={12}>
    //         <Card data={param[i + 1]} />
    //       </Col>
    //     </Row>)
    // }
    // return tree;
    return param.map(i => {
      return <Card data={i} />
    })
  }

  return (
    <div className={style.articleList}>
      <Wrapper type="fluid-wrapper">
        {
          // renderList(list || [])
          list ? renderList(list) : ''
        }
      </Wrapper>

      {/**
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
      </div>
       <ul>
        {renderList(state.articleList)}
      </ul>
      <Pager total={50} pageSize={5} page={state.page} pageChange={pageChange} />
      */}

    </div>
  )
}

export default Home;
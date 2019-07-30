import React from 'react';
import style from './style';

const Pager = props => {

  const { total, pageSize, page, pageChange } = props;

  const renderPage = () => {
    const totalpage = (total % pageSize) >= 0 ? parseInt(total / pageSize, 0) + 1 : parseInt(total / pageSize, 0);
    const html = [];
    for (let i = 1; i <= totalpage; i += 1) {
      html.push(<li onClick={() => { pageChange(i) }} className={page === i ? style.activePage : ''}>{i}</li>)
    }
    return html;
  }
  return (
    <ul className={style.pager}>
      <span>
        left
      </span>
      {
        renderPage()
      }
      <span>
        right
      </span>
    </ul>
  )
}
export default Pager;
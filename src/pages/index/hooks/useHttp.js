import { useState, useEffect } from 'react';
import { queryArticle } from '../../../api';

export const useRecommendListHooks = (url, deps) => {

  const [list, setList] = useState([])

  useEffect(() => {
    queryArticle().then(res => {
      console.log(res);
      setList(res)
    })
  }, deps)
  return [list, setList];
}

export const useRobinListHooks = () => {


}
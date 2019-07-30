
import request from '../utils/request';

export function querySecrchList() {
  return request.get('https://api.myjson.com/bins/98245')
}

export function queryArticle() {
  return request.get('https://api.myjson.com/bins/k6abl')
}



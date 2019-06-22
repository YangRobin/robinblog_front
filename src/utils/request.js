
import axios from 'axios';

const get = (url, params) => axios.get(url, {
  url,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  params,
}).then(res => res.data);

const post = (url, data) => {
  axios.post(url, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.data);
};

export default {
  get,
  post,
};


import axios from 'axios';

const get = (url, params) => {
	return axios.get(url, {
		url: url,
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
		params,
	}).then(res => {
		return res.data;
	})
}

const post = (url, data) => {
	axios.post(url, JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
	}).then(res => {
		return res.data;
	})
}

export default {
	get,
	post
}


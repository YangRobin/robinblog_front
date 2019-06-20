
import axios from 'axios';


let get = (url, param) => {
    return axios.get(url, {
        method: "GET",
        headers: {},
        params: param,
    })
}

let post = (url, data) => {
    return axios.post(url, data, {
        headers: {}
    })
}
export default axios;
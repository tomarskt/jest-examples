import 'whatwg-fetch';
const API_HOST = 'https://api.github.com/repos/facebook/react/issues';

export default function callApi(endpoint = API_HOST, options) {
    const defaultOptions = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: null
    };
    const fetchOptions = options || {};

    return fetch(endpoint, {...defaultOptions, ...fetchOptions})
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json()
        })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(err => {
            return Promise.reject(err)
        })
};
import axios from 'axios'

export default {
    get(url, req) {
        return axios.get(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    post(url, req) {
        return axios.post(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    patch(url, req) {
        return axios.patch(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    delete(url, req) {
        return axios.delete(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    }
}

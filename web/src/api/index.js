import Vue from 'vue'

export default {
    get(url, req) {
        return Vue.http.get(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    post(url, req) {
        return Vue.http.post(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    patch(url, req) {
        return Vue.http.patch(url, req)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    },
    delete(url, req) {
        return Vue.http.delete(url, request)
            .then((res) => Promise.resolve(res))
            .catch((err) => Promise.reject(err));
    }
}
import Vue from 'vue'
import router from '../router'
import store from '../store'

const API_URL = ''
const LOGIN_URL = '/login'
const SIGNUP_URL = ''

const REFRESH_TOKEN_URL = '/auth'

const AUTH_BASIC_HEADERS = {
  headers: {
    'Authorization': 'Basic ZGVtb2FwcDpkZW1vcGFzcw==' // Base64(client_id:client_secret) "demoapp:demopass"
  },
  emulateJSON: true
}

export default {

  install(Vue, options) {
    Vue.http.interceptors.push((req, next) => {
      const token = store.state.auth.accessToken
      const hasAuthHeader = req.headers.has('Authorization')

      if (token && !hasAuthHeader) this.setAuthHeader(req)

      next((res) => {
        if (this._isInvalidToken(res)) {
          return this._refreshToken(req)
        }
      })
    })

    Vue.prototype.$auth = Vue.auth = this
  },

  login(creds, redirect) {
    const params = {...creds}

    return Vue.http.post(LOGIN_URL, params, AUTH_BASIC_HEADERS)
      .then((res) => {
        console.log('login success')
        this._storeToken(res)

        if (redirect) router.push({ name: redirect })
      })
      .catch((error) => {
        console.log('login error')
        return error
      })
  },

  logout() {
    store.commit('CLEAR_ALL_DATA')
    router.push({name: 'login'})
  },

  setAuthHeader(request) {
    request.headers.set('Authorization', `Bearer ${store.state.auth.accessToken}`)
    request.params.access_token = store.state.auth.accessToken
  },

  _refreshToken(request) {
    const params = { 'grant_type': 'refresh_token', 'refresh_token': store.state.auth.refreshToken }

    return Vue.http.post(REFRESH_TOKEN_URL, params, AUTH_BASIC_HEADERS)
      .then((result) => {
        this._storeToken(result)
        return this._retry(request)
      })
      .catch((error) => {
        if (this._isInvalidToken(error)) {
          this.logout()
        }
      })
  },

  _soreToken (response) {
    const auth = store.state.auth
    const user = store.state.user

    auth.isLoggedIn = true
    auth.accessToken = response.body.access_token
    auth.refreshToken = response.body.refresh_token
    user.name = ''

    store.commit('UPDATE_AUTH', auth)
    store.commit('UPDATE_USER', user)
  },

  _isInvalidToken(response) {
    return (response.status === 401 && (response.error === 'invalid_token' || response.error === 'expired_token'))
  },
}

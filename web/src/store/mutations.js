export const UPDATE_AUTH = (state, auth) => {
  state.auth = auth
}

export const UPDATE_USER = (state, user) => {
  state.user = user
}

export const CLEAR_ALL_DATA = (state) => {
  state.auth.isLoggedIn = false
  state.auth.accessToken = null
  state.auth.refreshToken = null

  state.user = {
    id: '',
    name: ''
  }
}

export const UPDATE_ITEMS = (state, items) => {
  state.items = items
}
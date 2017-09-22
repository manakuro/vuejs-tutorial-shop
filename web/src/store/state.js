function buildSyncedData() {
  let syncedData = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      id: '',
      name: ''
    }
  }

  if (localStorage.getItem(STORAGE_KEY)) {
    syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  }
  return syncedData
}

function buildState() {
  let state = {
    items: []
  }

  return {...state, ...buildSyncedData()}
}

/* export state */
export const STORAGE_KEY = 'my-storage-key'
export const state = buildState()
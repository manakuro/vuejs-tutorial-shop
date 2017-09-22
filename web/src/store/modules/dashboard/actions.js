import Vue from 'vue'
import api from '../../../api/'

export const fetchItems = ({commit, state}) => {
  // fetch data from server 
 return api.get('http://localhost:4321/api/items')
           .then((res) => {
            commit('UPDATE_ITEMS', res.data)
           })
           .catch((err) => { console.log('error: ', err) })
}
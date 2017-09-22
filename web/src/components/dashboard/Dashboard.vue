<template src="./dashboard.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./dashboard.scss"></style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ItemList from './item-list/Item-list.vue'
  import Sidebar from '../sidebar/Sidebar.vue'

  export default {
    name: 'dashboard',
    components: {
      'sidebar': Sidebar,
      'item-list': ItemList,
    },
    data() {
      return {
        user: {
          id: '1000',
          name: 'Mana',
          age: '20'
        }
      }
    }
  }
</script>
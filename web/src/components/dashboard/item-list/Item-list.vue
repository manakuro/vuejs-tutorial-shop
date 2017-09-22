<template src="./item-list.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item-list.scss"></style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Item from './item/Item.vue'

  // don't know why createNamespacedHelpers is undefined even if using version 2.4.0
  // https://github.com/vuejs/vuex/releases
  // const { mapActions, mapGetters } = createNamespacedHelpers('dashboard')
  const namespace = 'dashboard'

  export default {
    name: 'item-list',
    components: {
      'item': Item,
    },
    props: {
      user: {
        type: Object,
      }
    },
    data() {
      return {
        items: []
      }
    },
    // initialize
    created() {
      this.fetch()
    },
    methods: {
      ...mapActions(namespace, [
        'fetchItems'  
      ]),

      fetch() {
        this.fetchItems()
      },
    },
    computed: {
      ...mapGetters(namespace, [
        'getItems'
      ]),
    }
  }
</script>
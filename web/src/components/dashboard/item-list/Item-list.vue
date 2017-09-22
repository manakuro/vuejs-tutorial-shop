<template src="./item-list.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item-list.scss"></style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Item from './item/Item.vue'

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
      ...mapActions([
        'fetchItems'  
      ]),

      fetch() {
        this.fetchItems()
      },
    },
    computed: {
      ...mapGetters([
        'getItems'
      ]),
    }
  }
</script>
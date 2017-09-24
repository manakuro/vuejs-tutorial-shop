<template src="./item-list.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item-list.scss"></style>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import Item from './item/Item.vue'
  import ItemModal from './item-modal/Item-modal.vue'

  const { mapActions, mapGetters } = createNamespacedHelpers('dashboard')

  export default {
    name: 'item-list',
    components: {
      'item': Item,
      'item-modal': ItemModal,
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
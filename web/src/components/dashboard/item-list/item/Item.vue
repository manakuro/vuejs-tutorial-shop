<template src="./item.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item.scss"></style>

<script>
  import ItemModal from './item-modal/Item-modal.vue'

  export default {
    name: 'item',
    components: {
      'item-modal': ItemModal,
    },
    props: {
      user: {
        type: Object,
      },
      item: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
      }
    },
    // initialize
    created() {
    },
    methods: {
      getImgPath(path) {
        // supposed to be external link
        return require('../../../../assets/placeholder.png')
      },
      openModal(ref) {
        this.$refs[ref].open()
      }
    }
  }
</script>
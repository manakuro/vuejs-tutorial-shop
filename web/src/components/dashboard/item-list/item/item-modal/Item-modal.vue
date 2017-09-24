<template src="./item-modal.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item-modal.scss"></style>

<script>
  export default {
    name: 'item-modal',
    props: {
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
      console.log('this.item: ', this.item)
    },
    methods: {
      getImgPath(path) {
        // supposed to be external link
        return require('../../../../../assets/placeholder.png')
      },
      open() {
        this.$refs.modal.open()
      },
      onOpen() {
        console.log('on open')
      },
      onClose() {
        console.log('on close')
      }
    }
  }
</script>
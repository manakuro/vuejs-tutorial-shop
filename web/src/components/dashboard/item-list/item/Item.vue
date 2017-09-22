<template src="./item.html"></template>
<style lang="scss" scoped rel="stylesheet/scss" src="./item.scss"></style>

<script>
  export default {
    name: 'item',
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
      }
    }
  }
</script>
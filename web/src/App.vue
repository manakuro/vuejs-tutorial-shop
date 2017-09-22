<template>
  <div id="app">
    <transition>
      <router-view></router-view>      
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped rel="stylesheet/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.v-enter-active, .v-leave-active {
  transition: opacity .2s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>

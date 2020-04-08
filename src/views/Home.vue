<template>
  <div class="home">
    <TheTopMenu />
    <ScrollHome />
  </div>
</template>

<script>
import TheTopMenu from '../components/TheTopMenu'
import ScrollHome from '../components/ScrollHome'

export default {
  name: 'Home',
  components: {
    TheTopMenu,
    ScrollHome
  }
}
</script>

<style lang="scss">
@import "../assets/styles/general";
.home {
  //@extend .contrast-bg-color;
  height: 100vh;
}
</style>

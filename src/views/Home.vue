<template>
  <div class="home">
    <TheTopMenu />
    <AboutSection />
  </div>
</template>

<script>
import TheTopMenu from '../components/TheTopMenu'
import AboutSection from '../components/AboutSection'

export default {
  name: 'Home',
  components: {
    TheTopMenu,
    AboutSection
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

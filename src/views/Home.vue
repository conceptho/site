<template>
  <div class="home">
    <TheTopMenu />
    <ScrollHome />
    <ConcepthoTerminal />
  </div>
</template>

<script>
import TheTopMenu from '../components/TheTopMenu'
import ScrollHome from '../components/ScrollHome'
import ConcepthoTerminal from '../components/ConcepthoTerminal'

export default {
  name: 'Home',
  components: {
    ConcepthoTerminal,
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
body.home-stoped {
  &:before {
    position: absolute;
    content: 'The service was stopped!';
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: #fff;
    padding: 100px;
    z-index: 99;
    overflow: hidden;
  }
}
.bg-no-image {
  background-image: none !important;
}
</style>

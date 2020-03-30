<template>
  <div class="home">
    <section>
      <div class="container pt-5">
        <div class="row">
          <div class="col-12">
            <router-link :to="{ name: 'NotFound' }" class="btn btn-outline-light">
              Go to Game
            </router-link>
          </div>
        </div>
      </div>
    </section>
<!--    <TheTopMenu />-->
<!--    <AboutSection />-->
  </div>
</template>

<script>
// import TheTopMenu from '../components/TheTopMenu'
// import AboutSection from '../components/AboutSection'

export default {
  name: 'Home',
  components: {
    // TheTopMenu,
    // AboutSection
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/bootstrap";
.home {
  @extend .contrast-bg-color;
  height: 100vh;
}
.manifest-container {
  @extend .d-flex;
  @extend .justify-content-center;
  @extend .align-items-center;
  span {
    display: block;
    &:nth-child(2) {
      margin-left: -60px;
    }
    &:nth-child(3) {
      margin-left: 60px;
    }
  }
}
</style>

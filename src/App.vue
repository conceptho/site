<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>

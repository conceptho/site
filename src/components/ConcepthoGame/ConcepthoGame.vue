<template>
  <div class="game-wrapper">
    <div :id="containerId" v-if="downloaded"></div>
    <div class="placeholder" v-else>
      Downloading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcepthoGame',
  data () {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container'
    }
  },
  async mounted () {
    const game = await import('./Game/init')
    this.downloaded = true

    this.$nextTick(() => {
      // const width = document.body.clientWidth
      // const height = document.body.clientHeight
      this.gameInstance = game.launch(800, 600, this.containerId)
    })
  },
  destroyed () {
    this.gameInstance.destroy(false)
  }
}
</script>

<style lang="scss">
body {
  #game-container {
    width: 100%;
    height: 100vh;
  }
}
</style>

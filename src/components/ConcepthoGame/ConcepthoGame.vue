<template>
  <div class="game-wrapper d-flex justify-content-center align-items-center">
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
      this.gameInstance = game.launch(900, 544, this.containerId)
    })
  },
  destroyed () {
    this.gameInstance.destroy(false)
  }
}
</script>

<style lang="scss">
.game-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #120c06;
}
#game-container {
  border: 10px solid #000;
}
</style>

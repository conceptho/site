<template>
  <div class="d-flex justify-content-center align-items-center">
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
#game-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
}
</style>

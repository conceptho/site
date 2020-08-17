<template>
  <div class="game-wrapper">
    <div class="d-none d-lg-block">
      <div class="tittle d-flex justify-content-center align-items-center"><h1 class="display-4">404 ERROR PAGE</h1></div>
      <div class="game-logo d-flex justify-content-center align-items-center"><img class="img-logo" src="./../components/ConcepthoGame/Game/assets/logo.png"></div>
      <ConcepthoGame />
      <div class="tutorial">
        <p>1 - Press -> to select your caracter</p>
        <p>2 - Press Enter to chose</p>
        <p>3 - Use the control arrows to play</p>
        <p>4 - Dodge the evil blocks</p>
      </div>
    </div>
  </div>
</template>

<script>
import ConcepthoGame from '../components/ConcepthoGame/ConcepthoGame'

export default {
  name: 'NotFound',
  components: {
    ConcepthoGame
  }
}
</script>

<style lang="scss">
@import "../assets/styles/general";
.game-wrapper {
  width: 100%;
  height: 100vh;
  background-image: url("./../components/ConcepthoGame/Game/assets/background.png");
}

.tittle{
  font-family: 'Press Start 2P', cursive;
  color: white;
  padding-top: 2%;
}
.game-logo{
  position: absolute;
  top: 15%;
  width: 100%;
  height: 100px;
  z-index: 999;
  .img-logo{
    height:100%;
  }
}

.tutorial{
  position: absolute;
  top: 25%;
  right: 1%;
  width: 20%;
  font-family: 'Press Start 2P', cursive;
  color: white;
  p{
    padding-bottom: 35px;
  }
}
</style>

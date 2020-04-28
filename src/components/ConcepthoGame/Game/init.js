import Phaser from 'phaser'
import BootScene from './Scenes/BootScene'
import SelectScene from './Scenes/SelectScene'
import PlayScene from './Scenes/PlayScene'

function launch (width, height, containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width,
    height,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 800 },
        debug: false
      }
    },
    scene: [
      BootScene,
      SelectScene,
      PlayScene
    ]
  })
}

export default launch
export { launch }

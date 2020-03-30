import { Scene } from 'phaser'
import sky from '../assets/sky.png'
import bomb from '../assets/bomb.png'
import thudMp3 from '../assets/thud.mp3'
import thudOgg from '../assets/thud.ogg'
// import dude from '../assets/dude.png'
import dude from '../assets/dudeoctcat.png'
import platform from '../assets/platform.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
    this.load.image('ground', platform)
    this.load.spritesheet('dude',
      dude,
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create () {
    this.scene.start('PlayScene')
  }
}

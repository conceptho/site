import { Scene } from 'phaser'
import castle from '../assets/castle.gif'
import boss from '../assets/boss-sprite.png'
import thudMp3 from '../assets/thud.mp3'
import monster from '../assets/monster.mp3'
import defeated from '../assets/defeated.mp3'
import thudOgg from '../assets/thud.ogg'
// import dude from '../assets/dude.png'
import dude from '../assets/dudeoctcat.png'
import ground from '../assets/ground.gif'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('castle', castle)
    this.load.audio('thud', [thudMp3, thudOgg])
    this.load.audio('monster', [monster])
    this.load.audio('defeated', [defeated])
    this.load.image('ground', ground)
    this.load.spritesheet('boss',
      boss,
      { frameWidth: 39, frameHeight: 48 }
    )
    this.load.spritesheet('dude',
      dude,
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create () {
    this.scene.start('PlayScene')
  }
}

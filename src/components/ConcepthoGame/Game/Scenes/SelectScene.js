import { Scene } from 'phaser'
import metzen from '../assets/metzen-sprite.png'
import gabi from '../assets/gabi-sprite.png'
import romulo from '../assets/romulo-sprite.png'
import carol from '../assets/carol-sprite.png'
import mayara from '../assets/mayara-sprite.png'
import jordao from '../assets/jordao-sprite.png'
import vieira from '../assets/vieira-sprite.png'
import ze from '../assets/ze-sprite.png'
import { initObjects } from './resources'

export default class SelectScene extends Scene {
  constructor () {
    super({ key: 'SelectScene' })
    this.selectTilePosition = 324
    this.selectedPlayer = 'metzen'
  }

  preload () {
    const characters = {
      metzen, gabi, romulo, carol, mayara, jordao, vieira, ze
    }

    Object.keys(characters).forEach(k => {
      this.load.spritesheet(k,
        characters[k],
        { frameWidth: 39, frameHeight: 48 }
      )
    })
  }

  create () {
    initObjects(['parallax'], this)

    this.selectTile = this.add.rectangle(this.selectTilePosition, 187, 30, 44, 0xFFFFFF, 1).setInteractive()
    this.physics.add.existing(this.selectTile, true)

    this.physics.add.staticImage(450, 220, 'select')

    // this.time.addEvent({
    //   delay: 3000,
    //   callback: () => {
    //     this.scene.start('PlayScene')
    //   }
    // })

    this.cursors = this.input.keyboard.createCursorKeys()
    this.enter = this.input.keyboard.addKey('Enter')
  }

  update () {
    if (this.enter.isDown) {
      this.scene.start('PlayScene', { selectedPlayer: this.selectedPlayer })
    }
    if (this.input.keyboard.checkDown(this.cursors.right, 250)) {
      switch (this.selectTilePosition) {
        case 324:
          this.selectedPlayer = 'gabi'
          this.selectTilePosition = 407
          this.selectTile.setPosition(this.selectTilePosition, 187)
          break
        case 407:
          this.selectedPlayer = 'romulo'
          this.selectTilePosition = 486
          this.selectTile.setPosition(this.selectTilePosition, 187)
          break
        case 486:
          this.selectedPlayer = 'carol'
          this.selectTilePosition = 565
          this.selectTile.setPosition(this.selectTilePosition, 187)
          break
        case 565:
          this.selectedPlayer = 'mayara'
          this.selectTilePosition = 323
          this.selectTile.setPosition(this.selectTilePosition, 257)
          break
        case 323:
          this.selectedPlayer = 'jordao'
          this.selectTilePosition = 406
          this.selectTile.setPosition(this.selectTilePosition, 257)
          break
        case 406:
          this.selectedPlayer = 'vieira'
          this.selectTilePosition = 485
          this.selectTile.setPosition(this.selectTilePosition, 257)
          break
        case 485:
          this.selectedPlayer = 'ze'
          this.selectTilePosition = 564
          this.selectTile.setPosition(this.selectTilePosition, 257)
          break
        default:
          this.selectedPlayer = 'metzen'
          this.selectTilePosition = 324
          this.selectTile.setPosition(this.selectTilePosition, 187)
          break
      }
    }
  }
}

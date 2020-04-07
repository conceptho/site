import { Scene } from 'phaser'
import {
  initCharacters,
  initObjects,
  initSounds,
  initTimers
} from './resources'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
    this.playerVelocity = 500
    this.touchGround = 0
    this.cursors = null
    this.endedGame = false
    this.scorePoints = 0
    this.playerOldPos = {
      x: 0,
      y: 0
    }
  }

  create () {
    initObjects(['parallax', 'platform', 'gameOver', 'velocity'], this)
    initCharacters(['bosses', 'players'], this)
    initSounds(['allSounds'], this)

    this.physics.world.on('worldbounds', (e) => {
      if (!this.endedGame) {
        this.sound.play('thud', { volume: 0.75 })
      }
    })

    this.physics.add.collider(this.player, this.platform)
    this.physics.add.collider(this.bosses, this.bosses)
    this.physics.add.collider(this.bosses, this.platform, () => {
      if (!this.endedGame) {
        this.sound.play('thud', { volume: 0.75 })
      }
    })
    this.physics.add.collider(this.player, this.bosses, () => {
      if (!this.endedGame) {
        this.endGame()
      }
    })
    this.cursors = this.input.keyboard.createCursorKeys()

    initTimers(['score'], this)
  }

  endGame () {
    this.endedGame = true
    this.ambienceSound.stop()
    this.defeatedSound.play({ volume: 0.75 })
    this.endGameTexts.children.iterate(child => child.setVisible(true))
  }

  restartGame () {
    this.endedGame = false
    this.endGameTexts.children.iterate(child => child.setVisible(false))
    this.timedEvent.reset()
    this.scorePoints = 0
    this.scoreText.setText('Score: 0')
    this.scene.restart()
  }

  update () {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-this.playerVelocity)
      this.player.anims.play('left', true)
      if (this.playerOldPos.x !== this.player.body.x) {
        this.parallax.tilePositionX -= 0.1
      }
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(this.playerVelocity)
      this.player.anims.play('right', true)
      if (this.playerOldPos.x !== this.player.body.x) {
        this.parallax.tilePositionX += 0.1
      }
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(400)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn')
    }
    // this.player.body.touching.down
    if (this.cursors.up.isDown && this.touchGround < 15) {
      this.touchGround++
      this.player.setVelocityY(-500)
    }

    if (this.player.body.touching.down && this.touchGround >= 0) {
      this.touchGround--
    }
  }
}

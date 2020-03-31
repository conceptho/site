import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
    this.player = null
    this.bosses = null
    this.platform = null
    this.cursors = null
    this.parallax = null
    this.endedGame = false
    this.scorePoints = 0
    this.timedEvent = null
    this.scoreText = null
    this.ambienceSound = null
    this.defeatedSound = null
    this.endGameTexts = []
    this.playerOldPos = {
      x: 0,
      y: 0
    }
  }

  create () {
    this.parallax = this.add.tileSprite(480, 272, 960, 544, 'castle')
    this.parallax.fixedToCamera = true

    this.bosses = this.physics.add.group({
      key: 'boss',
      repeat: 4,
      setXY: { x: 100, y: 160, stepX: 220 }
    })

    this.bosses.children.iterate((child, k) => {
      child.setCollideWorldBounds(true)
      child.body.onWorldBounds = true
      child.setBounce(1)
      child.setVelocity(60, (k * 50) / 2)
    })

    this.platform = this.physics.add.staticImage(480, 480, 'ground')
    this.platform.body.checkCollision = true

    this.scoreText = this.add.text(30, 30,
      'Score: 0',
      { fontFamily: '"Press Start 2P", cursive', fontSize: '14px', fill: '#FFFFFF' }
    )
    this.endGameTexts = this.physics.add.staticGroup()
    this.endGameTexts.add(
      this.add.text(200, 130,
        'Game Over',
        { fontFamily: '"Press Start 2P", cursive', fontSize: '50px', fill: '#FFFFFF' }
      ).setInteractive()
    )

    this.endGameTexts.add(
      this.add.text(210, 220,
        'Click here to play again',
        { fontFamily: '"Press Start 2P", cursive', fontSize: '17px', fill: 'white' }
      )
    )

    this.endGameTexts.children.iterate((child, k) => {
      child.setVisible(false)
      if (k === 1) {
        child.setInteractive()
        child.on('pointerover', () => {
          child.setStyle({ fill: 'yellow' })
        })
        child.on('pointerout', () => {
          child.setStyle({ fill: 'white' })
        })
        child.on('pointerdown', () => {
          this.restartGame()
        })
      }
    })

    this.sound.add('thud')
    this.ambienceSound = this.sound.add('monster')
    this.ambienceSound.play({ volume: 0.50 })
    this.defeatedSound = this.sound.add('defeated')
    this.physics.world.on('worldbounds', (e) => {
      if (!this.endedGame) {
        this.sound.play('thud', { volume: 0.75 })
      }
    })

    this.player = this.physics.add.sprite(100, 360, 'dude')

    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
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

    this.timedEvent = this.time.addEvent({
      delay: 100,
      callback: this.incrementScore.bind(this),
      loop: true
    })
  }

  incrementScore () {
    if (!this.endedGame) {
      this.scorePoints += 1
      this.scoreText.setText(`Score: ${this.scorePoints}`)

      // if (this.scorePoints === 50) {
      //   console.warn('Fase 1')
      //   this.bosses.children.iterate((child, k) => {
      //     child.setVelocity(60, 400)
      //   })
      // } else if (this.scorePoints === 70) {
      //   console.warn('Fase 2')
      //   this.bosses.children.iterate((child, k) => {
      //     child.setVelocity(60, 800)
      //   })
      // } else if (this.scorePoints === 90) {
      //   console.warn('Fase 3')
      //   this.bosses.children.iterate((child, k) => {
      //     child.setVelocity(60, 1400)
      //   })
      // }
    }
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
      this.player.setVelocityX(-160)
      this.player.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn')
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-700)
    }

    if (this.cursors.left.isDown) {
      if (this.playerOldPos.x !== this.player.body.x) {
        this.parallax.tilePositionX -= 0.1
        // this.parallax2.tilePosition.x -= 0.3
        // this.parallax3.tilePosition.x -= 0.6
        // this.parallax4.tilePosition.x -= 1
      }
      this.player.body.velocity.x = -150
    } else if (this.cursors.right.isDown) {
      if (this.playerOldPos.x !== this.player.body.x) {
        this.parallax.tilePositionX += 0.1
        // this.parallax2.tilePosition.x += 0.3
        // this.parallax3.tilePosition.x += 0.6
        // this.parallax4.tilePosition.x += 1
      }
      this.player.body.velocity.x = +150
    }
  }
}

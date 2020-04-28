const parallax = game => {
  game.parallax = game.add.tileSprite(480, 272, 960, 544, 'castle')
  game.parallax.fixedToCamera = true
}

const platform = game => {
  game.platform = game.physics.add.staticImage(480, 480, 'ground')
  game.platform.body.checkCollision = true
}

const players = game => {
  game.player = game.physics.add.sprite(100, 360, game.selectedPlayer)

  game.player.setBounce(0.2)
  game.player.setCollideWorldBounds(true)

  game.anims.create({
    key: 'left',
    frames: game.anims.generateFrameNumbers(game.selectedPlayer, { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  game.anims.create({
    key: 'turn',
    frames: [{ key: game.selectedPlayer, frame: 4 }],
    frameRate: 20
  })

  game.anims.create({
    key: 'right',
    frames: game.anims.generateFrameNumbers(game.selectedPlayer, { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  })
}

// const velocity = game => {
//   game.velocityText = game.add.text(710, 30,
//     'Velocity: 0',
//     { fontFamily: '"Press Start 2P", cursive', fontSize: '14px', fill: '#FFFFFF' }
//   )
//
//   game.timedEvent = game.time.addEvent({
//     delay: 100,
//     callback: () => {
//       game.velocityText.setText(`Velocity: ${game.touchGround}`)
//     },
//     loop: true
//   })
// }

const gameOver = game => {
  game.scoreText = game.add.text(30, 30,
    'Score: 0',
    { fontFamily: '"Press Start 2P", cursive', fontSize: '14px', fill: '#FFFFFF' }
  )
  game.endGameTexts = game.physics.add.staticGroup()
  game.endGameTexts.add(
    game.add.text(200, 130,
      'Game Over',
      { fontFamily: '"Press Start 2P", cursive', fontSize: '50px', fill: '#FFFFFF' }
    ).setInteractive()
  )

  game.endGameTexts.add(
    game.add.text(210, 220,
      'Click here to play again',
      { fontFamily: '"Press Start 2P", cursive', fontSize: '17px', fill: 'white' }
    )
  )

  game.endGameTexts.children.iterate((child, k) => {
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
        game.restartGame()
      })
    }
  })
}

const bosses = game => {
  game.bosses = game.physics.add.group(
    {
      key: 'boss',
      repeat: 8,
      setXY: { x: 100, y: 200, stepX: 100 }
    }
  )

  game.anims.create({
    key: 'normal',
    frames: [{ key: 'boss', frame: 2 }],
    frameRate: 20
  })

  game.anims.create({
    key: 'smile',
    frames: [{ key: 'boss', frame: 3 }],
    frameRate: 20
  })

  game.bosses.children.iterate((child, k) => {
    child.setCollideWorldBounds(true)
    child.body.onWorldBounds = true
    child.setBounce(1)
    child.setVelocity(60, (k * 50) / 2)
  })
}

const allSounds = game => {
  game.sound.add('thud')
  game.ambienceSound = game.sound.add('monster')
  game.ambienceSound.play({ volume: 0.50 })
  game.defeatedSound = game.sound.add('defeated')
}

const score = game => {
  const incrementScore = () => {
    if (!game.endedGame) {
      game.scorePoints += 1
      game.scoreText.setText(`Score: ${game.scorePoints}`)

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
  game.timedEvent = game.time.addEvent({
    delay: 100,
    callback: incrementScore,
    loop: true
  })
}

const resources = {
  characters: {
    bosses,
    players
  },
  objects: {
    parallax,
    platform,
    gameOver
    // velocity
  },
  sounds: {
    allSounds
  },
  timers: {
    score
  }
}

const initCharacters = (data, context) => {
  data.forEach(item => resources.characters[item](context))
}

const initObjects = (data, context) => {
  data.forEach(item => resources.objects[item](context))
}

const initSounds = (data, context) => {
  data.forEach(item => resources.sounds[item](context))
}

const initTimers = (data, context) => {
  data.forEach(item => resources.timers[item](context))
}

export {
  initCharacters,
  initObjects,
  initSounds,
  initTimers
}

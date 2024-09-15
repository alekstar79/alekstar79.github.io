import { Angler1, Angler2, HiveWhale, LuckyFish, Drone } from './enemies/index.js'
import { FireExplosion, SmokeExplosion } from './explosions/index.js'
import { Background, UI } from './ui/index.js'

import { MobileDeviceAdapter } from './mobile-device-adapter.js'
import { InputHandler } from './input-handler.js'
import { Particle } from './particle.js'
import { Player } from './player.js'

export class Game
{
  constructor(width, height, isMobileOrTablet)
  {
    this.width = width
    this.height = height

    this.background = new Background(this)
    this.player = new Player(this)
    this.ui = new UI(this)

    this.keys = new Set()

    this.enemies = []
    this.particles = []
    this.explosions = []

    this.enemyTimer = 0
    this.enemyInterval = 1
    this.ammo = 20
    this.maxAmmo = 50
    this.ammoTimer = 0
    this.ammoInterval = .5
    this.gameOver = false
    this.score = 0
    this.winningScore = 100
    this.gameTime = 0
    this.timeLimit = 30
    this.speed = 1
    this.debug = false

    if (isMobileOrTablet) {
      MobileDeviceAdapter.handleShootButton(this)
      MobileDeviceAdapter.handleTouchPad(this)
      MobileDeviceAdapter.handleUI()
    } else {
      InputHandler.init(this)
    }
  }

  update(deltaTime)
  {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    if (this.gameTime > this.timeLimit) {
      this.gameOver = true
    }

    this.background.update(deltaTime)
    this.background.layer4.update(deltaTime)

    this.player.update(deltaTime)

    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxAmmo) {
        this.ammo++
      }

      this.ammoTimer = 0
    } else {
      this.ammoTimer += deltaTime
    }

    // Updating and removing gears (particles)
    this.particles.forEach(p => p.update(deltaTime))
    this.particles = this.particles.filter(p => !p.markedForDeletion)

    // Updating and removing explosions
    this.explosions.forEach(ex => ex.update(deltaTime))
    this.explosions = this.explosions.filter(ex => !ex.markedForDeletion)

    this.enemies.forEach(enemy => {
      enemy.update(deltaTime)

      // if the player collides with an enemy, then...
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true
        this.addExplosion(enemy)                // add an explosion
        this.addParticles(enemy.lives, enemy)   // add flying particles, their number is equal to the lives
                                                // of the enemy the player has encountered

        // if our player encounters the Luck Fish, then activate the “Energy Mode”
        if (enemy.type === 'lucky') {
          this.player.enterPowerUp()

          // If collide with another enemy, take away one life from the player
        } else if (!this.gameOver) {
          this.score--
        }
      }

      this.player.projectiles.forEach(projectile => {
        // if a bullet hits an enemy, then...
        if (this.checkCollision(projectile, enemy)) {
          enemy.lives--                               // reduce the enemy's life by one
          this.addParticles(1, enemy)                 // add one flying particle
          projectile.markedForDeletion = true         // remove the bullet

          // checking if the enemy has no lives left
          if (enemy.lives <= 0) {
            enemy.markedForDeletion = true            // remove the enemy
            this.addExplosion(enemy)                  // add an explosion

            // if we destroyed a large enemy (hive type)
            if (enemy.type === 'hive') {
              for (let i = 0; i < 5; i++) {
                // create an array of five drones
                this.enemies.push(new Drone(
                  this,
                  enemy.x + Math.random() * enemy.width,
                  enemy.y + Math.random() * enemy.height * .5
                ))
              }
            }

            // increase the player's points
            if (!this.gameOver) {
              this.score += enemy.score
            }

            // checking the victory condition
            if (this.isWin()) {
              this.gameOver = true
            }
          }
        }
      })
    })

    this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion)

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }
  }

  draw(context)
  {
    this.background.draw(context)                               // First we draw the background (the first three layers)
    this.player.draw(context)                                   // and then all the other game objects: UI, player, enemies, etc.
    this.ui.draw(context)

    this.particles.forEach(particle => particle.draw(context))
    this.enemies.forEach(enemy => enemy.draw(context))
    this.explosions.forEach(ex => ex.draw(context))

    this.background.layer4.draw(context)                        // Draw the 4th layer so that it is in front of all objects
  }

  addEnemy()
  {
    const randomize = Math.random()

    if (randomize < .3) {
      this.enemies.push(new Angler1(this))
    } else if (randomize < .5) {
      this.enemies.push(new Angler2(this))
    } else if (randomize < .7) {
      this.enemies.push(new HiveWhale(this))
    } else {
      this.enemies.push(new LuckyFish(this))
    }
  }

  addParticles(number, enemy)
  {
    for (let i = 0; i < number; i++) {
      this.particles.push(new Particle(this, enemy.x + enemy.width * .5, enemy.y + enemy.height * .5))
    }
  }

  addExplosion(enemy)
  {
    this.explosions.push(
      Math.random() < .5
        ? new SmokeExplosion(this, enemy.x + enemy.width * .5, enemy.y + enemy.height * .5)
        : new FireExplosion(this, enemy.x + enemy.width * .5, enemy.y + enemy.height * .5)
    )
  }

  checkCollision(rect1, rect2)
  {
    return (
      rect1.x < rect2.x + rect2.width  &&
      rect2.x < rect1.x + rect1.width  &&
      rect1.y < rect2.y + rect2.height &&
      rect2.y < rect1.y + rect1.height
    )
  }

  isWin()
  {
    return this.score >= this.winningScore
  }
}

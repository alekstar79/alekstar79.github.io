import { Projectile } from './projectile.js'

export class Player
{
  constructor(game)
  {
    this.game = game

    this.width = 120
    this.height = 190
    this.x = 20
    this.y = 100

    this.maxSpeed = 600
    this.speedY = 0

    this.projectiles = []

    this.image = document.getElementById('player')

    this.maxFrame = 38
    this.frameX = 0
    this.frameY = 0

    this.powerUp = false
    this.powerUpTimer = 0
    this.powerUpLimit = 10
  }

  update(deltaTime)
  {
    if (this.game.keys.has('ArrowUp')) {
      this.speedY = -this.maxSpeed
    } else if (this.game.keys.has('ArrowDown')) {
      this.speedY = this.maxSpeed
    } else {
      this.speedY = 0;
    }

    this.y += this.speedY * deltaTime

    // vertical boundaries
    if (this.y > this.game.height - this.height * .5) {
      this.y = this.game.height - this.height * .5
    } else if (this.y < -this.height * .5) {
      this.y = -this.height * .5
    }

    // handle projectiles
    this.projectiles.forEach(pr => { pr.update(deltaTime) })
    this.projectiles = this.projectiles.filter(pr => !pr.markedForDeletion)

    // sprite animation
    if (this.frameX < this.maxFrame) {
      this.frameX++
    } else {
      this.frameX = 0
    }

    // power up
    if (this.powerUp) {
      if (this.powerUpTimer > this.powerUpLimit) {
        this.powerUpTimer = 0
        this.powerUp = false
        this.frameY = 0
      } else {
        this.powerUpTimer += deltaTime
        this.frameY = 1
        this.game.ammo += .1
      }
    }
  }

  draw(context)
  {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
    }

    // draw bullets
    this.projectiles.forEach(pr => { pr.draw(context) })

    // draw a player (seahorse)
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width, this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  shootTop()
  {
    if (this.game.ammo > 0) {
      this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30))
      this.game.ammo--
    }

    if (this.powerUp) this.shootBottom()
  }

  shootBottom()
  {
    if (this.game.ammo > 0) {
      this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 175))
      this.game.ammo--
    }
  }

  enterPowerUp()
  {
    this.powerUpTimer = 0
    this.powerUp = true

    if (this.game.ammo < this.game.maxAmmo) {
      this.game.ammo = this.game.maxAmmo
    }
  }
}

export class Particle
{
  constructor(game, x, y)
  {
    this.game = game

    this.x = x
    this.y = y

    this.image = document.getElementById('gears')
    this.frameX = Math.floor(Math.random() * 3)
    this.frameY = Math.floor(Math.random() * 3)

    this.spriteSize = 50
    this.sizeModifier = (Math.random() * .5 + .5).toFixed(1)
    this.size = this.spriteSize * this.sizeModifier

    this.speedX = Math.random() * 360 - 180
    this.speedY = Math.random() * -900

    this.gravity = 1800                                 // speed increase factor (acceleration)
    this.markedForDeletion = false
    this.angle = 0                                      // initial particle rotation angle
    this.va = Math.random() * 12 - 6                    // particle rotation speed
    this.bounced = 0                                    // number of impacts (bounces) of a particle from the surface of the "ground"
    this.bottomBounceBoundary = Math.random() * 80 + 60 // boundaries of particle contact with the earth's surface
  }

  update(deltaTime)
  {
    this.angle += this.va * deltaTime
    this.speedY += this.gravity * deltaTime

    this.x -= (this.speedX + this.game.speed) * deltaTime
    this.y += this.speedY * deltaTime

    if (this.y > this.game.height + this.size || this.x < 0 - this.size) {
      this.markedForDeletion = true
    }
    if (this.y > this.game.height - this.bottomBounceBoundary && this.bounced < 2) {
      this.bounced++
      this.speedY *= -.5
    }
  }

  draw(context)
  {
    context.save()

    context.translate(this.x, this.y)
    context.rotate(this.angle)

    context.drawImage(
      this.image,
      this.frameX * this.spriteSize,
      this.frameY * this.spriteSize,
      this.spriteSize,
      this.spriteSize,
      this.size * -.5,
      this.size * -.5,
      this.size,
      this.size
    )

    context.restore()
  }
}

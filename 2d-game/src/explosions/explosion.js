/**
* @class Explosion
* @property {HTMLImageElement} image
*/
export class Explosion
{
  constructor(game, x, y)
  {
    this.game = game
    this.frameX = 0

    this.spriteWidth = 200
    this.spriteHeight = 200

    this.width = this.spriteWidth
    this.height = this.spriteHeight

    this.x = x - this.width * .5
    this.y = y - this.height * .5

    this.fps = 30
    this.timer = 0
    this.interval = 1 / this.fps
    this.markedForDeletion = false
    this.maxFrame = 8
  }

  update(deltaTime)
  {
    // so that the explosions move with the game, and do not stand still
    this.x -= this.game.speed * deltaTime

    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
    if (this.frameX > this.maxFrame) {
      this.markedForDeletion = true
    }
  }

  draw(context)
  {
    context.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}

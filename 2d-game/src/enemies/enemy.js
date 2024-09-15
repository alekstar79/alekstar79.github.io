/**
* @class Enemy
* @property {HTMLImageElement} image
* @property {Number} width
* @property {Number} height
* @property {Number|String} lives
* @property {Number} x
* @property {Number} y
*/
export class Enemy
{
    constructor(game)
    {
        this.game = game

        this.x = this.game.width
        this.speedX = Math.random() * -90 - 270
        this.markedForDeletion = false

        this.frameX = 0
        this.frameY = 0

        this.maxFrame = 38
    }

    update(deltaTime)
    {
        // update the enemy's X coordinate (reduce it by speedX)
        this.x += (this.speedX - this.game.speed) * deltaTime // subtract this.game.speed so that enemies appear evenly, and not all at once

        // we mark an enemy as removed if he completely crosses the left border of the playing area
        if (this.x + this.width < 0) {
            this.markedForDeletion = true
        }

        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = 0
        }
    }

    draw(context)
    {
        // in debug mode
        if (this.game.debug) {
            // draw a frame for the enemy
            context.strokeRect(this.x, this.y, this.width, this.height)
            // and show each enemy his life
            context.fillStyle = 'yellow'
            context.font = '20px Helvetica'
            context.fillText(this.lives, this.x, this.y - 5)
        }

        // drawImage method of the canvas element with 9 arguments for “cutting” frames from the spritesheet
        context.drawImage(
          this.image,
          this.frameX * this.width,
          this.frameY * this.height,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        )
    }
}

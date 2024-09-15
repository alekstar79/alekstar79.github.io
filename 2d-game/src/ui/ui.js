export class UI
{
  constructor(game)
  {
    this.game = game
    this.fontSize = 25
    this.fontFamily = 'Bangers'
    this.color = 'white'
  }

  draw(context)
  {
    context.save()

    context.fillStyle = this.color
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = 'black'
    context.font = this.fontSize + 'px ' + this.fontFamily

    context.fillText('Score: ' + this.game.score, 20, 40)
    context.fillText('Timer: ' + (this.game.gameTime).toFixed(1), 20, 100)

    // сообщения о победе/проигрыше
    if (this.game.gameOver) {
      context.textAlign = 'center'

      let message1, message2

      if (this.game.isWin()) {
        message1 = 'Most Wondrous!'
        message2 = 'Well done explorer!'
      } else {
        message1 = 'Blazes!'
        message2 = 'Get my repair kit and try again!'
      }

      context.font = '70px ' + this.fontFamily
      context.fillText(message1, this.game.width * .5, this.game.height * .5 - 20)
      context.font = '25px ' + this.fontFamily
      context.fillText(message2, this.game.width * .5, this.game.height * .5 + 20)
    }

    // draw the number of bullets in the upper left corner of the playing area
    if (this.game.player.powerUp) {
      context.fillStyle = '#ffffbd' // set the color
    }
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(5 * i + 20, 50, 3, 20)
    }

    context.restore()
  }
}

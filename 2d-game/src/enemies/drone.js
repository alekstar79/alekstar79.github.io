import { Enemy } from './enemy.js'

export class Drone extends Enemy
{
  constructor(game, x, y)
  {
    super(game)

    this.width = 115
    this.height = 95

    this.x = x
    this.y = y

    this.image = document.getElementById('drone')

    this.frameY = Math.floor(Math.random() * 2)

    this.lives = 3
    this.score = this.lives

    this.type = 'drone'
    this.speedX = Math.random() * -252 - 30
  }
}

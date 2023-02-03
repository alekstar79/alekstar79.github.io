export class Car
{
  constructor(src, x, y, isPlayer)
  {
    this.x = x
    this.y = y

    this.isPlayer = isPlayer
    this.loaded = false
    this.dead = false

    this.image = new Image()
    this.image.addEventListener('load', () => {
      this.loaded = true
    })

    this.image.src = src
  }

  update(speed, height)
  {
    if (!this.isPlayer) {
      this.y += speed
    }
    if (this.y > height) {
      this.dead = true
    }
  }

  collide(car, scale)
  {
    let hit = false

    if (this.y < car.y + car.image.height * scale && this.y + this.image.height * scale > car.y) {
      if (this.x + this.image.width * scale > car.x && this.x < car.x + car.image.width * scale) {
        hit = true
      }
    }

    return hit
  }

  move(v, d, scale, { w, h })
  {
    if (v === 'x') {
      d *= 2

      this.x += d

      // Rolling back the changes if the car left the screen
      if (this.x + this.image.width * scale > w) {
        this.x -= d
      }
      if (this.x < 0) {
        this.x = 0
      }
    } else {
      this.y += d

      if (this.y + this.image.height * scale > h) {
        this.y -= d
      }
      if (this.y < 0) {
        this.y = 0
      }
    }
  }
}

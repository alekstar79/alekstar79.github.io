export class Road
{
  constructor(src, y)
  {
    this.x = 0
    this.y = y

    this.loaded = false

    this.image = new Image()
    this.image.addEventListener('load', () => {
      this.loaded = true
    })

    this.image.src = src
  }

  update(road, speed, { h })
  {
    this.y += speed

    if (this.y > window.innerHeight) {
      this.y = road.y - h + speed
    }
  }
}

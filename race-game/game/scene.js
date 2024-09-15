import { Road } from './road.js'
import { Car } from './car.js'

const random = (min, max) => Math.round(min - .5 + Math.random() * (max - min + 1))
const SCALE = .1
const SPEED = 2

export class GameScene
{
  get road1()
  {
    return this.roads[0]
  }

  get road2()
  {
    return this.roads[1]
  }

  /**
   * @param {App} app
   */
  constructor(app)
  {
    const { layer, loop } = app

    this.layer = layer
    this.loop = loop
    this.app = app

    this.createScene()
  }

  keyDown({ keyCode })
  {
    switch(keyCode) {
      case 37: // Left
        this.player.move('x', -SPEED, SCALE, this.layer)
        break;
      case 39: // Right
        this.player.move('x',  SPEED, SCALE, this.layer)
        break;
      case 38: // Up
        this.player.move('y', -2 * SPEED, SCALE, this.layer)
        break;
      case 40: // Down
        this.player.move('y',  4 * SPEED, SCALE, this.layer)
        break;
      case 27: // Esc
        if (!this.loop.requestId) {
          if (this.player.dead) {
            this.reload()
          }

          this.app.start()
        } else {
          this.app.stop()
        }
    }
  }

  addCar({ w })
  {
    if (random(0, 10000) > 9700) {
      this.cars.push(
        new Car(
          'images/car_red.png',
          random(30, w - 50),
          random(250, 400) * -1,
          false
        )
      )
    }
  }

  reload()
  {
    this.player.dead = false
    this.cars = []
  }

  drawRoad(ctx, road)
  {
    ctx.drawImage(
      road.image,         // Image
      0,                  // First X on image
      0,                  // First Y on image
      road.image.width,   // End X on image
      road.image.height,  // End Y on image
      road.x,             // X on canvas
      road.y,             // Y on canvas
      this.app.layer.w,   // Width on canvas
      this.app.layer.h    // Height on canvas
    )
  }

  drawCar(ctx, car)
  {
    ctx.drawImage(
      car.image,
      0,
      0,
      car.image.width,
      car.image.height,
      car.x,
      car.y,
      car.image.width * SCALE,
      car.image.height * SCALE
    )
  }

  createScene()
  {
    const { w, h } = this.layer

    this.cars = []
    this.player = new Car('images/car.png', w / 2, h / 2, true)
    this.roads = [
      new Road('images/road.jpg', 0),
      new Road('images/road.jpg', h)
    ]
  }

  /**
   * @param {Number} correction
   */
  updateScene(correction = 0)
  {
    this.road1.update(this.road2, SPEED, this.layer)
    this.road2.update(this.road1, SPEED, this.layer)

    this.addCar(this.layer)

    this.player.update(SPEED, this.layer.h + 50)

    let isDead = false
    for (let i = 0, ln = this.cars.length; i < ln; i++) {
      this.cars[i].update(SPEED, this.layer.h + 50)

      if (this.cars[i].dead) {
        isDead = true
      }
    }

    if (isDead) {
      this.cars.shift()
    }

    let hit = false
    for (let i = 0, ln = this.cars.length; i < ln; i++) {
      hit = this.player.collide(this.cars[i], SCALE)

      if (hit) {
        alert('Crash!')
        this.app.stop()

        this.player.dead = true
        break
      }
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  renderScene(ctx)
  {
    ctx.clearRect(0, 0, this.layer.w, this.layer.h)

    for (let i = 0, ln = this.roads.length; i < ln; i++) {
      this.drawRoad(ctx, this.roads[i])
    }

    this.drawCar(ctx, this.player)

    for (let i = 0, ln = this.cars.length; i < ln; i++) {
      this.drawCar(ctx, this.cars[i])
    }
  }
}

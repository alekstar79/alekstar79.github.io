import { faces, points, volume } from './utils.js'

import { Point } from './point.js'
import { Face } from './face.js'
import { Ease } from './ease.js'

export class World
{
  constructor(size, width, pointer)
  {
    const { canvas } = pointer

    this.size       = size
    this.width      = width
    this.pointer    = pointer
    this.count      = size * size * size

    // this.cellWidth  = this.width / this.size

    // ---- trigo ----

    this.cosY       = 0.0
    this.sinY       = 0.0
    this.cosX       = 0.0
    this.sinX       = 0.0
    this.cosZ       = 0.0
    this.sinZ       = 0.0
    this.angleY     = new Ease(0.1, 0)
    this.angleX     = new Ease(0.1, 0)
    this.angleZ     = new Ease(0.1, 0)
    this.autoZ      = 0

    // ---- focal ----

    this.fl         = pointer.canvas.width / 5
    this.zEye       = new Ease(0.1, 0)

    // ---- points ----

    this.iPoints    = []

    this.points = points.call(this, [], canvas)
    this.faces  = faces.call(this, [], canvas)
    this.volume = volume.call(this, [])

    pointer.scale   = this.size
  }

  newPoint(x, y, z, project)
  {
    const s = (this.size) * 2
    const index = (x + this.size) + (y + this.size) * s + (z + this.size) * s * s

    let p = this.iPoints[index]

    if (p) return p

    p = new Point(this, x, y, z, project)

    this.points.push(p)
    this.iPoints[index] = p

    return p
  }

  build()
  {
    let seed = 1965

    function random() {
      seed = (seed * 31415821 + 1) % 1E8
      return seed / 1E8
    }

    // set volume

    let m = this.size / 2

    for (let x = 1; x < this.size - 1; x++) {
      for (let y = 1; y < this.size - 1; y++) {
        for (let z = 2; z < this.size - 2; z++) {
          if (x > m - 4 && x < m + 4 && y > m - 4 && y < m + 4 && z > m - 4 && z < m + 4) {
            // the light
          } else {
            this.volume.set(x, y, z, random() > 0.98 ? 47 : 0)
          }

          this.volume.set(Math.round(+this.size / 4), Math.round(+this.size / 4), z, 215)
          this.volume.set(Math.round(+this.size / 4), Math.round(-this.size / 4), z, 215)
          this.volume.set(Math.round(-this.size / 4), Math.round(+this.size / 4), z, 215)
          this.volume.set(Math.round(-this.size / 4), Math.round(-this.size / 4), z, 215)
        }

        if (x > 3 && x < this.size - 3 && y > 3 && y < this.size - 3) {
          this.volume.set(x, y, 1, 215)
        }
      }
    }

    m = this.size / 2

    for (let x = m - 2; x < m + 2; x++) {
      for (let y = m - 2; y < m + 2; y++) {
        for (let z = m - 2; z < m + 2; z++) {
          this.volume.set(x, y, z, 360)
        }
      }
    }

    // build faces

    let value

    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        for (let z = 0; z < this.size; z++) {
          if (this.volume.get(x, y, z) === 0) {
            value = this.volume.get(x - 1, y, z)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x - 1, 2 * y - 1, 2 * z + 1,
                2 * x - 1, 2 * y + 1, 2 * z + 1,
                2 * x - 1, 2 * y + 1, 2 * z - 1,
                2 * x - 1, 2 * y - 1, 2 * z - 1,
                -1, 0, 0, value
              ))
            }

            value = this.volume.get(x + 1, y, z)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x + 1, 2 * y + 1, 2 * z - 1,
                2 * x + 1, 2 * y + 1, 2 * z + 1,
                2 * x + 1, 2 * y - 1, 2 * z + 1,
                2 * x + 1, 2 * y - 1, 2 * z - 1,
                1, 0, 0, value
              ))
            }

            value = this.volume.get(x, y - 1, z)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x + 1, 2 * y - 1, 2 * z - 1,
                2 * x + 1, 2 * y - 1, 2 * z + 1,
                2 * x - 1, 2 * y - 1, 2 * z + 1,
                2 * x - 1, 2 * y - 1, 2 * z - 1,
                0, -1, 0, value
              ))
            }

            value = this.volume.get(x, y + 1, z)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x - 1, 2 * y + 1, 2 * z + 1,
                2 * x + 1, 2 * y + 1, 2 * z + 1,
                2 * x + 1, 2 * y + 1, 2 * z - 1,
                2 * x - 1, 2 * y + 1, 2 * z - 1,
                0, 1, 0, value
              ))
            }

            value = this.volume.get(x, y, z - 1)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x - 1, 2 * y + 1, 2 * z - 1,
                2 * x + 1, 2 * y + 1, 2 * z - 1,
                2 * x + 1, 2 * y - 1, 2 * z - 1,
                2 * x - 1, 2 * y - 1, 2 * z - 1,
                0, 0, -1, value
              ))
            }

            value = this.volume.get(x, y, z + 1)

            if (value > 0) {
              this.faces.push(new Face(this,
                2 * x + 1, 2 * y - 1, 2 * z + 1,
                2 * x + 1, 2 * y + 1, 2 * z + 1,
                2 * x - 1, 2 * y + 1, 2 * z + 1,
                2 * x - 1, 2 * y - 1, 2 * z + 1,
                0, 0, 1, value
              ))
            }
          }
        }
      }
    }
  }

  render()
  {
    // view angles

    this.angleX.ease(Math.PI / 2 + this.pointer.dy / 200)
    this.angleZ.ease(-this.pointer.dx / 200 + (this.autoZ -= 0.002))
    this.zEye.ease(this.pointer.scale)

    if (this.pointer.scale < 0) {
      this.pointer.scale += -this.pointer.scale / 100
    }

    // cosin

    this.cosY = Math.cos(this.angleY.value + 0.001)
    this.sinY = Math.sin(this.angleY.value + 0.001)
    this.cosX = Math.cos(this.angleX.value + 0.001)
    this.sinX = Math.sin(this.angleX.value + 0.001)
    this.cosZ = Math.cos(this.angleZ.value + 0.001)
    this.sinZ = Math.sin(this.angleZ.value + 0.001)

    // render

    this.points.project()
    this.faces.culling()
    this.faces.sort()
    this.faces.draw()
  }
}

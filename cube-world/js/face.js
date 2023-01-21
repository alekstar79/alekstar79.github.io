import { Canvas } from './canvas.js'

export class Face
{
  constructor(world, x0, y0, z0, x1, y1, z1, x2, y2, z2, x3, y3, z3, nx, ny, nz, color)
  {
    const o      = -world.size

    this.ctx     = Canvas.init('ctx')

    this.world   = world
    this.p0      = world.newPoint(o+x0, o+y0, o+z0, true)
    this.p1      = world.newPoint(o+x1, o+y1, o+z1, true)
    this.p2      = world.newPoint(o+x2, o+y2, o+z2, true)
    this.p3      = world.newPoint(o+x3, o+y3, o+z3, true)
    this.normal  = world.newPoint(nx, ny, nz, false)
    this.center  = world.newPoint((o+x0 + o+x1 + o+x2 + o+x3) / 4, (o+y0 + o+y1 + o+y2 + o+y3) / 4, (o+z0 + o+z1 + o+z2 + o+z3) / 4, true)
    this.color   = color

    this.light   = (this.color === 360)
    this.visible = true
    this.zIndex  = 0

    const dx     = this.center.x / world.size * 0.5
    const dy     = this.center.y / world.size * 0.5
    const dz     = this.center.z / world.size * 0.5

    this.distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
  }

  isVisible()
  {
    if (this.p0.visible && this.p1.visible && this.p2.visible && this.p3.visible) {
      // back face culling
      if (
        (this.p1.yp - this.p0.yp) / (this.p1.xp - this.p0.xp) < (this.p2.yp - this.p0.yp) / (this.p2.xp - this.p0.xp)
        ^ this.p0.xp < this.p1.xp === this.p0.xp > this.p2.xp
      ) {
        // face visible
        this.visible = true

        return true
      }
    }

    // face hidden
    this.visible  = false
    this.zIndex = -99999

    return false
  }

  lineTo(p0)
  {
    // draw line
    const x = (this.center.xp - p0.xp)
    const y = (this.center.yp - p0.yp)
    const d = 1 / Math.sqrt(x * x + y * y)

    this.ctx.lineTo(
      p0.xp - x * d,
      p0.yp - y * d
    )
  }

  draw(canvas)
  {
    this.clear(canvas)

    // draw face
    canvas.ctx.beginPath()

    this.lineTo(this.p0)
    this.lineTo(this.p1)
    this.lineTo(this.p2)
    this.lineTo(this.p3)

    // lightning
    const c = this.light ? 100 : (100 - this.distance * 200) * (1 - this.normal.z) + Math.max(0, 30 - this.zIndex * 0.1)

    canvas.ctx.fillStyle = 'hsl(' + this.color + ','+ (70) + '%,' + (c) +'%)'
    canvas.ctx.fill()
  }

  clear(canvas)
  {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

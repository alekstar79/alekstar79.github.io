export class Point {
  constructor(x, y, color, radius, id)
  {
    this.x = x || 0
    this.y = y || 0

    this.color = color || 0

    this.red = color >> 16
    this.green = (color >> 8) & 0xff
    this.blue = color & 0xff

    this.radius = radius || 0
    this.id = id || 0
  }
}

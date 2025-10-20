/**
* @class
* @name MorphPoint
*/
export class MorphPoint
{
  constructor(x = 0, y = 0, color = 0, radius = 0, id = 0)
  {
    this.x = x
    this.y = y
    this.color = color
    this.radius = radius
    this.id = id

    this.red = color >> 16
    this.green = (color >> 8) & 0xff
    this.blue = color & 0xff
  }

  clone()
  {
    return new MorphPoint(this.x, this.y, this.color, this.radius, this.id)
  }

  distanceTo(otherPoint)
  {
    const dx = this.x - otherPoint.x
    const dy = this.y - otherPoint.y

    return Math.sqrt(dx * dx + dy * dy)
  }

  toGrid(cellSize)
  {
    return {
      x: Math.floor(this.x / cellSize),
      y: Math.floor(this.y / cellSize)
    }
  }

  generateRandomAround(minDistance)
  {
    const radius = minDistance * (Math.random() + 1)
    const angle = 2 * Math.PI * Math.random()

    return new MorphPoint(
      this.x + radius * Math.cos(angle),
      this.y + radius * Math.sin(angle)
    )
  }

  isInRectangle(width, height)
  {
    return this.x >= 0 && this.x <= width && this.y >= 0 && this.y <= height
  }

  interpolateTo(targetPoint, ratio)
  {
    const red = this.red + (targetPoint.red - this.red) / ratio
    const green = this.green + (targetPoint.green - this.green) / ratio
    const blue = this.blue + (targetPoint.blue - this.blue) / ratio
    const x = this.x + (targetPoint.x - this.x) / ratio
    const y = this.y + (targetPoint.y - this.y) / ratio
    const radius = this.radius + (targetPoint.radius - this.radius) / ratio

    return new MorphPoint(x, y, (red << 16) | (green << 8) | blue, radius, this.id)
  }

  isSimilarTo(otherPoint, threshold = 0.005)
  {
    return (
      Math.abs(this.x - otherPoint.x) <= threshold &&
      Math.abs(this.y - otherPoint.y) <= threshold &&
      Math.abs(this.red - otherPoint.red) <= threshold &&
      Math.abs(this.green - otherPoint.green) <= threshold &&
      Math.abs(this.blue - otherPoint.blue) <= threshold &&
      Math.abs(this.radius - otherPoint.radius) <= threshold
    )
  }
}

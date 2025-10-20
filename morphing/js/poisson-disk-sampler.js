import { ImageDistribution } from './image-distribution.js'
import { MorphPoint } from './point.js'

/**
* @class
* @name PoissonDiskSampler
* @property {number} width
* @property {number} height
* @property {number} cellSize
* @property {number} gridWidth
* @property {number} gridHeight
* @property {[]} grid
*/
export class PoissonDiskSampler
{
  constructor(width, height, radius)
  {
    this.width = width
    this.height = height
    this.cellSize = radius / Math.sqrt(2)
    this.gridWidth = Math.ceil(width / this.cellSize)
    this.gridHeight = Math.ceil(height / this.cellSize)
    this.grid = this.buildGrid()
  }

  buildGrid()
  {
    const grid = []
    for (let i = 0; i < this.gridWidth; i++) {
      grid[i] = new Array(this.gridHeight).fill(null)
    }

    return grid
  }

  setGridPoint(gridX, gridY, value)
  {
    if (gridX >= 0 && gridX < this.gridWidth &&
      gridY >= 0 && gridY < this.gridHeight) {
      this.grid[gridX][gridY] = value
    }
  }

  getNeighborhood(gridX, gridY, offset = 2)
  {
    const minX = Math.max(0, gridX - offset)
    const maxX = Math.min(this.gridWidth - 1, gridX + offset)
    const minY = Math.max(0, gridY - offset)
    const maxY = Math.min(this.gridHeight - 1, gridY + offset)

    const neighbors = []
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        if (this.grid[x][y]) {
          neighbors.push(this.grid[x][y])
        }
      }
    }

    return neighbors
  }

  isInNeighborhood(point, minDistance)
  {
    const gridPoint = point.toGrid(this.cellSize)
    const neighbors = this.getNeighborhood(gridPoint.x, gridPoint.y)

    return neighbors.some(neighbor =>
      point.distanceTo(neighbor) < minDistance
    )
  }

  distribute(maxPoints, radius, imageData)
  {
    const processList = []
    const result = []

    let maxRadius = 0
    let minRadius = Infinity

    const firstPoint = new MorphPoint(this.width * 0.5, this.height * 0.5)

    processList.push(firstPoint)

    const firstGridPoint = firstPoint.toGrid(this.cellSize)

    this.setGridPoint(firstGridPoint.x, firstGridPoint.y, firstPoint)

    while (result.length < maxPoints && processList.length > 0) {
      const randomIndex = Math.floor(Math.random() * processList.length)
      const point = processList[randomIndex]

      let added = false
      for (let attempt = 0; attempt < 20; attempt++) {
        const newPoint = point.generateRandomAround(radius)

        if (!newPoint.isInRectangle(this.width, this.height)) continue
        if (this.isInNeighborhood(newPoint, radius)) continue

        const pixelX = Math.floor(newPoint.x)
        const pixelY = Math.floor(newPoint.y)

        if (pixelX >= this.width || pixelY >= this.height) continue

        const pixelOffset = (pixelY * this.width + pixelX) * 4
        const r = imageData.data[pixelOffset]
        const g = imageData.data[pixelOffset + 1]
        const b = imageData.data[pixelOffset + 2]

        if (r === 0xff && g === 0xff && b === 0xff) continue

        newPoint.color = (r << 16) | (g << 8) | b
        newPoint.red = r
        newPoint.green = g
        newPoint.blue = b
        newPoint.id = maxPoints - result.length

        const intensity = 1 - (r + g + b) / (3 * 255)

        newPoint.radius = ((newPoint.id * 2 / maxPoints + intensity) / 4) * radius * 1.2

        result.push(newPoint)
        processList.push(newPoint)

        const newGridPoint = newPoint.toGrid(this.cellSize)

        this.setGridPoint(newGridPoint.x, newGridPoint.y, newPoint)

        maxRadius = Math.max(maxRadius, newPoint.radius)
        minRadius = Math.min(minRadius, newPoint.radius)

        added = true
        break
      }

      if (!added) {
        processList.splice(randomIndex, 1)
      }
    }

    return new ImageDistribution(imageData, result, maxRadius, minRadius)
  }
}

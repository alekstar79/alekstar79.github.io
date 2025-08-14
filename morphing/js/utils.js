import { Point } from './point.js'

function distance(p1, p2) {
  const dx = p1.x - p2.x
  const dy = p1.y - p2.y

  return Math.sqrt(dx * dx + dy * dy)
}

function squareAroundPoint(grid, x, y, offset) {
  const off = Math.round(offset / 2)

  const minX = Math.max(0, Math.min(grid.length, x - off))
  const maxX = Math.max(0, Math.min(grid.length, x + off))
  const minY = Math.max(0, Math.min(grid[0].length, y - off))
  const maxY = Math.max(0, Math.min(grid[0].length, y + off))
  const tmp = []

  for (let i = minX; i < maxX; i++) {
    for(let j = minY; j < maxY; j++) {
      if (grid[i][j] !== null) {
        tmp.push(grid[i][j])
      }
    }
  }

  return tmp
}

export function imageToGrid(point, cellSize) {
  const gridX = ~~(point.x / cellSize)
  const gridY = ~~(point.y / cellSize)

  return new Point(gridX, gridY)
}

export function generateRandomPointAround(point, mindist) {
  const r1 = Math.random()
  const r2 = Math.random()

  const radius = mindist * (r1 + 1)
  const angle = 2 * Math.PI * r2

  const newX = point.x + radius * Math.cos(angle)
  const newY = point.y + radius * Math.sin(angle)

  return new Point(newX, newY)
}

export function inNeighbourhood(grid, point, mindist, cellSize) {
  const gridPoint = imageToGrid(point, cellSize)
  const cellsAroundPoint = squareAroundPoint(grid, gridPoint.x, gridPoint.y, 4)

  let valid = false
  cellsAroundPoint.forEach((cell) => {
    if (!cell) return

    if (distance(cell, point) < mindist) {
      valid = true
    }
  })

  return valid
}

export function deepMerge(a, b, fn) {
  return [...new Set([...Object.keys(a), ...Object.keys(b)])]
    .reduce((acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }), {})
}

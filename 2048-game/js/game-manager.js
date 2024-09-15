import { Grid } from './grid.js'
import { Tile } from './tile.js'

export class GameManager
{
  constructor(keyboardManager, actuator, storageManager, music, size = 4)
  {
    this.size = size
    this.startTiles = 2
    this.keyboardManager = keyboardManager
    this.storageManager = storageManager
    this.actuator = actuator
    this.music = music

    this.keyboardManager.on('move', this.move.bind(this))
    this.keyboardManager.on('restart', this.restart.bind(this))
    this.keyboardManager.on('keepPlaying', this.keepPlaying.bind(this))

    this.setup()
  }

  restart()
  {
    this.storageManager.clearGameState()
    this.actuator.continueGame()
    this.setup()

    window.location.reload()
  }

  keepPlaying()
  {
    this.keepPlaying = true
    this.actuator.continueGame()
  }

  isGameTerminated()
  {
    return !!(this.over || (this.won && !this.keepPlaying))
  }

  setup()
  {
    const previousState = this.storageManager.getGameState()

    if (previousState) {
      this.grid = new Grid(previousState.grid.size, previousState.grid.cells)
      this.score = previousState.score
      this.over = previousState.over
      this.won = previousState.won
      this.keepPlaying = previousState.keepPlaying
    } else {
      this.grid = new Grid(this.size)
      this.score = 0
      this.over = false
      this.won = false
      this.keepPlaying = false
      this.addStartTiles()
    }

    this.actuate()
  }

  addStartTiles()
  {
    for (let i = 0; i < this.startTiles; i++) {
      this.addRandomTile()
    }
  }

  addRandomTile()
  {
    if (this.grid.cellsAvailable()) {
      const value = Math.random() < .9 ? 2 : 4
      const tile = new Tile(this.grid.randomAvailableCell(), value)

      this.grid.insertTile(tile)
    }
  }

  actuate()
  {
    if (this.storageManager.getBestScore() < this.score) {
      this.storageManager.setBestScore(this.score)
    }
    if (this.over) {
      this.storageManager.clearGameState()
    } else {
      this.storageManager.setGameState(this.serialize())
    }

    this.actuator.actuate(
      this.grid,
      {
        score: this.score,
        over: this.over,
        won: this.won,
        bestScore: this.storageManager.getBestScore(),
        terminated: this.isGameTerminated()
      }
    )
  }

  serialize()
  {
    return {
      grid: this.grid.serialize(),
      score: this.score,
      over: this.over,
      won: this.won,
      keepPlaying: this.keepPlaying
    }
  }

  prepareTiles()
  {
    this.grid.eachCell((x, y, tile) => {
      if (tile) {
        tile.mergedFrom = null
        tile.savePosition()
      }
    })
  }

  moveTile(tile, cell)
  {
    this.grid.cells[tile.x][tile.y] = null
    this.grid.cells[cell.x][cell.y] = tile

    tile.updatePosition(cell)
  }

  move(direction)
  {
    const self = this

    if (this.isGameTerminated()) return

    const vector = this.getVector(direction)
    const traversals = this.buildTraversals(vector)

    let cell, tile, moved = false

    this.prepareTiles()

    traversals.x.forEach(x => {
      traversals.y.forEach(y => {
        cell = { x, y }

        tile = self.grid.cellContent(cell)

        if (tile) {
          const positions = self.findFarthestPosition(cell, vector)
          const next = self.grid.cellContent(positions.next)

          if (next && next.value === tile.value && !next.mergedFrom) {
            const merged = new Tile(positions.next, tile.value * 2)

            merged.mergedFrom = [ tile, next ]

            self.grid.insertTile(merged)
            self.grid.removeTile(tile)
            tile.updatePosition(positions.next)
            self.score += merged.value

            if (merged.value === 2048) {
              self.won = true
            }
          } else {
            self.moveTile(tile, positions.farthest)
            this.music.rotate()
          }
          if (!self.positionsEqual(cell, tile)) {
            moved = true
          }
        }
      })
    })

    if (moved) {
      this.addRandomTile()

      if (!this.movesAvailable()) {
        this.over = true
      }

      this.actuate()
    }
  }

  getVector(direction)
  {
    return {
      0: { x:  0, y: -1 },
      1: { x:  1, y:  0 },
      2: { x:  0, y:  1 },
      3: { x: -1, y:  0 }

    }[direction]
  }

  buildTraversals(vector)
  {
    const traversals = { x: [], y: [] }

    for (let pos = 0; pos < this.size; pos++) {
      traversals.x.push(pos)
      traversals.y.push(pos)
    }

    if (vector.x === 1) traversals.x = traversals.x.reverse()
    if (vector.y === 1) traversals.y = traversals.y.reverse()

    return traversals
  }

  findFarthestPosition(cell, vector)
  {
    let previous

    do {

      previous = cell

      cell = {
        x: previous.x + vector.x,
        y: previous.y + vector.y
      }

    } while (this.grid.withinBounds(cell) && this.grid.cellAvailable(cell))

    return {
      farthest: previous,
      next: cell
    }
  }

  movesAvailable()
  {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable()
  }

  tileMatchesAvailable()
  {
    const self = this

    for (let tile, x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        tile = this.grid.cellContent({ x, y })

        if (tile) {
          for (let direction = 0; direction < 4; direction++) {
            const vector = self.getVector(direction)
            const cell = {
              x: x + vector.x,
              y: y + vector.y
            }

            const other = self.grid.cellContent(cell)

            if (other && other.value === tile.value) {
              return true
            }
          }
        }
      }
    }

    return false
  }

  positionsEqual(first, second)
  {
    return first.x === second.x && first.y === second.y
  }
}

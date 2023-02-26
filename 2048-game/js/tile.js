export class Tile
{
  constructor(position, value)
  {
    this.x = position.x
    this.y = position.y

    this.value = value || 2
    this.previousPosition = null
    this.mergedFrom = null
  }

  savePosition()
  {
    this.previousPosition = { x: this.x, y: this.y }
  }

  updatePosition(position)
  {
    this.x = position.x
    this.y = position.y
  }

  serialize()
  {
    return {
      value: this.value,

      position: {
        x: this.x,
        y: this.y
      }
    }
  }
}

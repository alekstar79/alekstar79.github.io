export class Layer
{
  get w() {
    return this.canvas.width
  }

  get h() {
    return this.canvas.height
  }

  constructor(container)
  {
    this.fitToContainer = this.fitToContainer.bind(this)
    this.createLayer = this.createLayer.bind(this)

    container.appendChild(this.createLayer())

    this.fitToContainer()
  }

  createLayer()
  {
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    return this.canvas
  }

  fitToContainer()
  {
    this.canvas.height = window.innerHeight
    this.canvas.width = window.innerWidth
  }
}

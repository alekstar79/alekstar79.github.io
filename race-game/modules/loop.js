export class Loop
{
  constructor(update, render)
  {
    this.render = render
    this.update = update

    this.maxInterval = 40
    this.lastUpdate = 0
    this.deltaTime = 0
  }

  animate(currentTime = performance.now())
  {
    this.requestId = requestAnimationFrame(this.animate.bind(this))
    this.deltaTime = currentTime - this.lastUpdate

    if (this.deltaTime < this.maxInterval) {
      this.update(this.deltaTime / 1000)
      this.render()
    }

    this.lastUpdate = currentTime
  }

  stop()
  {
    cancelAnimationFrame(this.requestId)

    this.requestId = null
  }
}

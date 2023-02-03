import { Scene, Layer, Loop } from './index.js'

import './shim.js'

export class App
{
  constructor(container)
  {
    this.layer = new Layer(container)

    this.loop = new Loop(
      this.update.bind(this),
      this.render.bind(this)
    )
  }

  setListeners(listeners = [])
  {
    listeners.forEach(({ context, type, listener }) => {
      context.addEventListener(type, listener)
    })
  }

  create(GameScene)
  {
    GameScene || (GameScene = Scene)

    this.scene = new GameScene(this)
  }

  update(correction = 0)
  {
    this.scene.updateScene(correction)
  }

  render()
  {
    this.scene.renderScene(this.layer.context)
  }

  start()
  {
    this.loop.animate()
  }

  stop()
  {
    this.loop.stop()
  }
}

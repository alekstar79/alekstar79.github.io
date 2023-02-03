import { GameScene } from './game/scene.js'
import { App } from './modules/app.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.body)

  app.create(GameScene)
  app.setListeners([
    {
      context: app.layer.canvas,
      type: 'contextmenu',
      listener: e => {
        e.preventDefault()
        return false
      }
    },
    {
      context: window,
      type: 'resize',
      listener: () => {
        app.layer.fitToContainer()
        app.render()
      }
    },
    {
      context: window,
      type: 'keydown',
      listener: e => {
        app.scene.keyDown(e)
      }
    }
  ])

  app.start()

})

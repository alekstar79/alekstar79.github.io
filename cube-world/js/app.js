import { bindEvents } from './events.js'

import { Canvas } from './canvas.js'
import { World } from './world.js'

;(function(canvas) {
  const pointer = {
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    startX: 0,
    startY: 0,
    canvas: canvas,
    touchMode: false,
    sweeping: false,
    isDown: false,
    scale: 0
  }

  bindEvents.call(pointer)

  canvas.resize()

  const world = new World(22, 200, pointer)

  world.build()

  ;(function run() {
    requestAnimationFrame(run)
    world.render(canvas)
  })()

})(new Canvas())

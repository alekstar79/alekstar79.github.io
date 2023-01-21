import { Canvas } from './canvas.js'
import { World } from './world.js'

;(function(canvas) {
  'use strict';

  const pointer = (function(canvas) {
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

    let

      started = false,
      scaling = false,
      oldDist = 0,
      endX = 0,
      endY = 0

    Object.entries({
      start: [canvas.cnv, 'mousedown,touchstart', function(e) {
        this.touchMode = e.targetTouches

        if (this.touchMode) {
          e.preventDefault()
        }
        if (this.touchMode && e.touches.length === 2) {
          scaling = true
          started = false
        } else {
          const pointer = this.touchMode ? this.touchMode[0] : e

          this.startX = this.x = pointer.clientX - this.canvas.left
          this.startY = this.y = pointer.clientY - this.canvas.top

          started = true
          this.isDown = true

          if (this.down) {
            this.down(e)
          }

          setTimeout(function() {
            if (!started && Math.abs(this.startX - this.x) < 11 && Math.abs(this.startY - this.y) < 11) {
              // if (this.tap) this.tap(e)
            }
          }.bind(this), 200)
        }
      }],

      move: [window, 'mousemove,touchmove', function(e) {
        this.touchMode = e.targetTouches

        if (this.touchMode) {
          e.preventDefault()
        }
        if (scaling && this.touchMode) {
          const d = distance(
            this.touchMode[0].clientX - this.touchMode[1].clientX,
            this.touchMode[0].clientY - this.touchMode[1].clientY
          )

          const s = d > oldDist ? -0.4 : 0.4

          oldDist = d
          this.scale += s

          if (this.pinch) {
            this.pinch(e)
          }

          return
        }

        const pointer = this.touchMode ? this.touchMode[0] : e

        this.x = pointer.clientX - this.canvas.left
        this.y = pointer.clientY - this.canvas.top

        if (started) {
          this.sweeping = true
          this.dx = endX - (this.x - this.startX)
          this.dy = endY - (this.y - this.startY)
        }

        /* if (this.move) {
          this.move(e)
        } */
      }],

      stop: [window, 'mouseup,touchend,touchcancel', function(e) {
        e.preventDefault()

        if (scaling) {
          scaling = false
          return
        }
        if (started) {
          endX = this.dx
          endY = this.dy
          started = false

          this.isDown = false

          if (this.up) {
            this.up(e)
          }

          this.sweeping = false
        }
      }]
    }).forEach(([, [el, evt, callback]]) => {
      for (let i = 0, events = evt.split(','); i < events.length; i++) {
        el.addEventListener(events[i], callback.bind(pointer), false)
      }
    })

    window.addEventListener('wheel', wheel.bind(pointer), false)

    function wheel(e) {
      this.scale += (e.deltaY > 0 ? -1 : +1)
    }

    return pointer

  })(canvas)

  canvas.resize()

  const world = new World(22, 200, pointer)

  world.build()

  ;(function run() {
    requestAnimationFrame(run)
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
    world.render(canvas)
  })()

})(new Canvas())

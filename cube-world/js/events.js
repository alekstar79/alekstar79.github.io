import { distance } from './utils.js'

export function bindEvents()
{
  let

    started = false,
    scaling = false,
    oldDist = 0,
    endX = 0,
    endY = 0

  this.pinch || (this.pinch = e => console.log('pinch', e))
  this.down  || (this.down  = e => console.log('down', e))
  this.move  || (this.move  = e => console.log('move', e))
  this.tap   || (this.tap   = e => console.log('tap', e))
  this.up    || (this.up = e => console.log('up', e))

  this.wheel || (this.wheel = e => {
    this.scale += (e.deltaY > 0 ? -1 : +1)
  })

  window.addEventListener('wheel', this.wheel.bind(this), false)

  Object.entries({
    start: [this.canvas.cnv, 'mousedown,touchstart', e => {
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

        setTimeout(() => {
          if (!started && Math.abs(this.startX - this.x) < 11 && Math.abs(this.startY - this.y) < 11) {
            if (this.tap) this.tap(e)
          }
        }, 200)
      }
    }],

    move: [window, 'mousemove,touchmove', e => {
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

      if (this.move) {
        this.move(e)
      }
    }],

    stop: [window, 'mouseup,touchend,touchcancel', e => {
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
      el.addEventListener(events[i], callback, false)
    }
  })
}

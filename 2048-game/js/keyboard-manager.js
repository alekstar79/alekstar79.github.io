export class KeyboardManager
{
  constructor()
  {
    this.events = {}

    this.eventTouchstart = 'touchstart'
    this.eventTouchmove = 'touchmove'
    this.eventTouchend = 'touchend'

    this.listen()
  }

  on(event, callback)
  {
    this.events[event] ??= []
    this.events[event].push(callback)
  }

  emit(event, data)
  {
    const callbacks = this.events[event]

    if (callbacks) {
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }

  listen()
  {
    const self = this
    const map = {
      38: 0,
      39: 1,
      40: 2,
      37: 3,
      75: 0,
      76: 1,
      74: 2,
      72: 3,
      87: 0,
      68: 1,
      83: 2,
      65: 3
    }

    document.addEventListener('keydown', event => {
      const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
      const mapped = map[event.which]

      if (!modifiers) {
        if (mapped !== undefined) {
          event.preventDefault()
          self.emit('move', mapped)
        }
      }
      if (!modifiers && event.which === 82) {
        self.restart.call(self, event)
      }
    })

    this.bindButtonPress('.retry-button', this.restart)
    this.bindButtonPress('.restart-button', this.restart)
    this.bindButtonPress('.keep-playing-button', this.keepPlaying)

    const gameContainer = document.getElementsByClassName('game-container')[0]
    let touchStartClientX, touchStartClientY

    gameContainer.addEventListener(this.eventTouchstart, event => {
      if (event.targetTouches > 1) return

      touchStartClientX = event.touches[0].clientX
      touchStartClientY = event.touches[0].clientY

      event.preventDefault()
    })

    gameContainer.addEventListener(this.eventTouchmove, event => {
      event.preventDefault()
    })

    gameContainer.addEventListener(this.eventTouchend, event => {
      if (event.targetTouches > 0) return

      let touchEndClientX, touchEndClientY

      touchEndClientX = event.changedTouches[0].clientX
      touchEndClientY = event.changedTouches[0].clientY

      const dx = touchEndClientX - touchStartClientX
      const dy = touchEndClientY - touchStartClientY

      const absDx = Math.abs(dx)
      const absDy = Math.abs(dy)

      if (Math.max(absDx, absDy) > 10) {
        self.emit('move', absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0))
      }
    })
  }

  restart(event)
  {
    event.preventDefault()
    this.emit('restart')
  }

  keepPlaying(event)
  {
    event.preventDefault()
    this.emit('keepPlaying')
  }

  bindButtonPress(selector, fn)
  {
    const button = document.querySelector(selector)

    button.addEventListener('click', fn.bind(this))
    button.addEventListener(this.eventTouchend, fn.bind(this))
  }
}

export const emitter = (function() {
  /**
  * @class Emitter
  * @constructor
  * @property {Object} events
  */
  return new class Emitter
  {
    constructor(events = {})
    {
      this.awaitEventBinding = []
      this.events = events
    }

    applyAwaitEvent(id, fn)
    {
      const index = this.awaitEventBinding.findIndex(e => e.id === id)

      if (index > -1) {
        fn.apply(this, this.awaitEventBinding[index].data)
        this.awaitEventBinding.splice(
          index,
          1
        )
      }
    }

    on(id, fn)
    {
      (this.events[id] ||= []).push(fn)

      this.applyAwaitEvent(id, fn)

      return () => {
        this.off(id, fn)
      }
    }

    once(id, fn)
    {
      this.on(id, function handler(...args) {
        this.off(id, handler)
        fn.apply(this, args)
      })
    }

    off(id, fn)
    {
      if (typeof this.events[id] === 'undefined') return

      const idx = this.events[id].indexOf(fn)

      if (idx > -1) {
        this.events[id].splice(idx, 1)
      }
    }

    emit(id, ...data)
    {
      if (typeof this.events[id] === 'undefined') {
        this.awaitEventBinding.push({ id, data })
      }

      (this.events[id] || []).forEach(
        fn => fn.apply(this, data)
      )
    }
  }
})()

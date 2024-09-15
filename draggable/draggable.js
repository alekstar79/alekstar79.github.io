import { debounce, clamp, coords } from './utils.js'

/**
* @typedef {Object} Emitter
* @property {function(name: String, fn: Function, ms: Number=): Map<*, *>} once
* @property {function(name: String, fn: Function): Map<*, *>} on
* @property {function(name: String, any?): void} emit
*/

/**
* @typedef {Object} DraggableOptions
* @property {HTMLElement} parent
* @property {HTMLElement} node
* @property {Function} init
* @property {String[]=} exclude
* @property {Number=} mode
* @property {Number=} snap
* @property {Boolean=} mobile
*/

export class Draggable
{
  /**
  * @type {String[]}
  */
  static bindings = ['removeListeners','addListeners','mousedown','mousemove','mouseup','recalcCoords']

  /**
  * @type {string[]}
  */
  static exclude = ['button','input','select']

  /**
  * @type {{}}
  */
  static events = {}

  /**
  * @type {[]}
  */
  static map = []

  /**
  * @param {String} name
  * @returns {Map<any, any>}
  */
  static event = name => Draggable.events[name] ??= new Map()

  /**
  * @type {Emitter}
  */
  static emitter = ({
    emit: (name, ...args) => (Draggable.event(name))
      .forEach(fn => fn(...args)),

    once: (name, fn, ms = 9) => (Draggable.event(name))
      .set(fn, debounce((...args) => {
        Draggable.events[name].delete(fn)

        fn(...args)

      }, ms)),

    on: (name, fn) => (Draggable.event(name))
      .set(fn, fn)
  })

  /**
  * @param {Object[]} elements
  */
  static init(elements)
  {
    for (const set of elements) {
      Draggable.map.push(new Draggable(set))
    }
  }

  /**
  * @param {String} uid
  * @returns {Object[]}
  */
  static sort(uid)
  {
    return [...Draggable.map].sort(($1, $2) => $1.uid === uid ? 1 : $2.uid === uid ? -1 : 0)
  }

  static INIT = { AFTER: 'init:after' }
  static NODE = { BEFORE_INSERT: 'insert:before', AFTER_INSERT: 'insert:after' }
  static SET = { BEFORE: 'set:before', AFTER: 'set:after' }
  static UNSET = { BEFORE: 'unset:before', AFTER: 'unset:after' }
  static TOGGLE = { LISTENERS: 'toggle:listeners' }
  static COORDS = { RECALC: 'recalc:coords' }

  static MOUSE = {
    ENTER: 'mouse:enter',
    LEAVE: 'mouse:leave',
    BEFORE_UP: 'mouseup:before',
    AFTER_UP: 'mouseup:after',
    MOVE: 'mouse:move',
    DOWN: 'mouse:down'
  }

  /**
  * @returns {{move: String, start: String, end: String}}
  */
  get events()
  {
    return this.mobile
      ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
      : { start: 'mousedown',  move: 'mousemove', end: 'mouseup' }
  }

  /**
  * @returns {HTMLElement|Window}
  */
  get target()
  {
    return this.mobile ? this.node : window
  }

  /**
  * @param {String} action
  */
  set toggle(action)
  {
    this.isDown = action === 'addListeners'

    this[action](this.events, this.target)

    this.dispatch(
      Draggable.TOGGLE.LISTENERS,
      this
    )
  }

  /**
  * @param {DraggableOptions}
  */
  constructor({ node, parent, init, exclude = [], lock = 'opened', mode = 0, snap = 20, mobile = false })
  {
    this.uid = (Math.random() + 1).toString(36).slice(2)
    this.display = window.getComputedStyle(node).display
    this.exclude = Draggable.exclude.concat(exclude)

    this.initialParent = node.parentElement || parent
    this.currentDroppable = null
    this.belowDroppable = null

    this.isDown = false
    this.mobile = mobile

    this.lock = lock
    this.mode = mode
    this.snap = snap
    this.node = node

    this.shiftX = 0
    this.shiftY = 0

    this.bind()
    this.set()

    this.afterInit(init)
  }

  bind()
  {
    this.recalcCoords = debounce(this.recalcCoords)
    this.droppable = debounce(this.droppable)

    for (const method of Draggable.bindings) {
      this[method] = this[method].bind(this)
    }
  }

  afterInit(init)
  {
    this.dispatch(Draggable.INIT.AFTER, { map: Draggable.map })

    if (init instanceof Function) {
      init.call(this, { emitter: Draggable.emitter, map: Draggable.map })
    }
  }

  _unset()
  {
    window.removeEventListener('resize', this.recalcCoords)

    this.node.removeEventListener('dragstart', this.dragstart)
    this.node.removeEventListener('mousedown', this.mousedown)
    this.node.removeAttribute('draggable')

    this.toggle = 'removeListeners'
  }

  _set()
  {
    window.addEventListener('resize', this.recalcCoords)

    this.node.setAttribute('draggable', 'draggable')
    this.node.addEventListener('dragstart', this.dragstart)
    this.node.addEventListener('mousedown', this.mousedown)
  }

  unset()
  {
    this.dispatch(Draggable.UNSET.BEFORE, this)

    this._unset()

    this.dispatch(Draggable.UNSET.AFTER, this)
  }

  set()
  {
    this.dispatch(Draggable.SET.BEFORE, this)

    this._unset()
    this._set()

    this.recalcCoords()

    this.dispatch(Draggable.SET.AFTER, this)
  }

  /**
  * @param {{start: String, move: String, end: String}} evt
  * @param {HTMLElement} el
  */
  addListeners(evt, el)
  {
    el.addEventListener(evt.move, this.mousemove, this.mobile)
    el.addEventListener(evt.end, this.mouseup, this.mobile)
  }

  /**
  * @param {{start: String, move: String, end: String}} evt
  * @param {HTMLElement} el
  */
  removeListeners(evt, el)
  {
    el.removeEventListener(evt.move, this.mousemove)
    el.removeEventListener(evt.end, this.mouseup)
  }

  /**
  * @param {String} event
  * @param {Object} detail
  */
  dispatch(event, detail)
  {
    this.node.dispatchEvent(new CustomEvent(event, { detail }))

    Draggable.emitter.emit(event, detail)
  }

  zIndex()
  {
    Draggable.sort(this.uid).forEach((el, i) => el.node.style.zIndex = `${i}`)
  }

  moveAt()
  {
    this.node.style.left = `${this.left}px`
    this.node.style.top = `${this.top}px`
  }

  recalcCoords()
  {
    this.node.style.position = 'absolute'

    this.left = this.node.offsetLeft + scrollX
    this.top = this.node.offsetTop + scrollY

    this.dispatch(Draggable.COORDS.RECALC, this)

    this.node.style = ''
  }

  /**
  * @param {MouseEvent|TouchEvent} e
  */
  calculateCoords(e)
  {
    let { x, y  } = coords(e)

    x -= this.shiftX
    y -= this.shiftY

    this.setCoords(this.resolveMode(x - (x % this.snap), y - (y % this.snap)))

    this.moveAt()
  }

  /**
  * @param {{x: Number, y: Number}}
  */
  setCoords({ x, y })
  {
    this.top = clamp(y, 0, window.innerHeight - this.node.clientHeight)
    this.left = clamp(x, 0, window.innerWidth - this.node.clientWidth)
  }

  /**
  * @param {Number} x
  * @param {Number} y
  * @returns {{x: Number, y: Number}}
  */
  resolveMode(x, y)
  {
    return {
      x: this.mode === 2 ? this.left : x,
      y: this.mode === 1 ? this.top  : y
    }
  }

  /**
  * @param {MouseEvent|TouchEvent} e
  */
  calculateShift(e)
  {
    const { x, y } = coords(e)

    this.shiftX = x - this.node.offsetLeft
    this.shiftY = y - this.node.offsetTop
  }

  /**
  * @param {HTMLElement} to
  * @param {InsertPosition} where
  */
  insertNode(to, where = 'beforeend')
  {
    this.dispatch(Draggable.NODE.BEFORE_INSERT, this)

    to.insertAdjacentElement(where, this.node)

    this.dispatch(Draggable.NODE.AFTER_INSERT, this)
  }

  /**
  * @param {HTMLElement|String} to
  * @param {InsertPosition} where
  */
  restorePosition(to, where = 'beforeend')
  {
    if ((to = document.querySelector(to))) {
      this.insertNode(to, where)
      this.initialParent = to
    }
  }

  /**
  * @param {MouseEvent} e
  */
  droppable(e)
  {
    this.node.style.display = 'none'
    this.belowDroppable = document.elementFromPoint(e.clientX, e.clientY)
    this.node.style.display = this.display

    if (!this.belowDroppable) return

    const droppable = this.belowDroppable.closest('.droppable')

    if (this.currentDroppable === droppable) return

    if (this.currentDroppable) {
      this.dispatch(Draggable.MOUSE.LEAVE, this)
    }

    this.currentDroppable = droppable

    if (this.currentDroppable) {
      this.dispatch(Draggable.MOUSE.ENTER, this)
    }
  }

  /**
  * @param {MouseEvent} e
  * @returns {Boolean}
  */
  needBreakOff(e)
  {
    return /* this.lock */ this.isDown || e.button !== 0 || this.exclude.some(el => e.target.closest(el))
  }

  /**
  * @param {MouseEvent|TouchEvent} e
  */
  mousedown(e)
  {
    if (this.needBreakOff(e)) return

    this.prevent(e)
    this.zIndex()

    this.node.style.position = 'absolute'

    this.calculateShift(e)

    this.dispatch(Draggable.MOUSE.DOWN, this)

    this.toggle = 'addListeners'
  }

  /**
  * @param {MouseEvent|TouchEvent} e
  */
  mousemove(e)
  {
    if (!this.isDown) return

    this.prevent(e)
    this.calculateCoords(e)
    this.droppable(e)

    this.dispatch(
      Draggable.MOUSE.MOVE,
      this
    )
  }

  /**
  * @param {MouseEvent|TouchEvent} e
  */
  mouseup(e)
  {
    this.toggle = 'removeListeners'

    this.calculateCoords(e)

    this.dispatch(Draggable.MOUSE.BEFORE_UP, this)

    this.currentDroppable
      ? this.insertNode(this.currentDroppable)
      : this.insertNode(this.initialParent)

    this.dispatch(Draggable.MOUSE.AFTER_UP, this)

    this.node.style = ''
  }

  /**
  * @param {Event} e
  */
  prevent(e)
  {
    e.stopPropagation()
    e.preventDefault()
  }

  /**
  * @param {Event} e
  */
  dragstart(e)
  {
    this.prevent(e)
  }
}

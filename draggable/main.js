import { debounce, findElement, buildPath, initSuccess } from './utils.js'
import { Draggable as DRAG } from './draggable.js'
import { LockalStore } from './store.js'

import './definitions.js'

const state = LockalStore.readState()

const dir = ['up-down-left-right','left-right','up-down']
const ids = ['drag-1','drag-2','drag-3']

function writeState()
{
  const target = this.belowDroppable?.closest('.droppable')

  LockalStore.writeState({
    id: this.node.id,

    selector: !target ? buildPath(this.node) : '.droppable',
    lock: getLockState(this.node),

    mode: this.mode,
    snap: this.snap,
    left: this.left,
    top: this.top
  })
}

/**
* @param {HTMLElement} el
* @returns {String}
*/
function getLockState(el)
{
  let lock

  try {
    lock = el.getAttribute('draggable') ? 'opened' : 'locked'
  } catch ({ message }) {
    lock = message
  }

  return lock
}

DRAG.emitter.once(DRAG.INIT.AFTER, async function({ map }) {
  const output = document.querySelector('.output__info')

  const outputDirections = output.querySelector('.direction__value span')
  const outputActive = output.querySelector('.active__value span')
  const outputLock = output.querySelector('.lock__value span')
  const outputSnap = output.querySelector('.step__value span')

  function toggleDirection()
  {
    const mode = ++this.node.dataset.mode % dir.length

    this.node.querySelector('button[data-type="direction"]')
      .firstElementChild.className = `fa-solid fa-${dir[mode]}`

    outputDirections.textContent = dir[mode] ?? '*'

    this.node.dataset.mode = `${mode}`
    this.mode = mode

    this.recalcCoords()
  }

  function toggleLock()
  {
    const drag = this.node.getAttribute('draggable')

    const icon = !drag ? 'lock-open' : 'lock'
    const lock = drag ? 'locked' : 'opened'

    this.node.querySelector('button[data-type="lock"]')
      .firstElementChild.className = `fa-solid fa-${icon}`

    outputLock.textContent = lock
    this.lock = lock

    this[drag ? 'unset' : 'set']()
  }

  function setLock()
  {
    const icon = this.lock === 'opened' ? 'lock-open' : 'lock'
    const action = this.lock === 'locked' ? 'unset' : 'set'

    this.node.querySelector('button[data-type="lock"]')
      .firstElementChild.className = `fa-solid fa-${icon}`

    this.lock === 'opened'
      ? this.node.setAttribute('draggable', 'draggable')
      : this.node.removeAttribute('draggable')

    this[action]()
  }

  function setOutput({ active, mode, lock, snap = '*' })
  {
    outputDirections.textContent = dir[mode] ?? '*'
    outputActive.textContent = active
    outputLock.textContent = lock
    outputSnap.textContent = snap
  }

  window.addEventListener('mousemove', debounce(e => {
    const el = findElement(
      document.elementFromPoint(e.clientX, e.clientY),
      el => ids.includes(el.id)
    )

    setOutput({
      active: el.id,
      lock: getLockState(el),
      mode: el.dataset.mode,
      snap: el.dataset.snap
    })

  }))

  map.forEach(obj => {
    setLock.call(obj)

    obj.node.addEventListener('snap:changed', () => {
      outputSnap.textContent = obj.snap

      writeState.call(obj)
    })

    obj.node.addEventListener('click', e => {
      const btn = e.target.closest('button')

      if (!btn) return

      switch (btn.dataset.type) {
        case 'direction':
          toggleDirection.call(obj, btn)
          break
        case 'lock':
          toggleLock.call(obj)
          break
      }

      writeState.call(obj)
    })
  })

  initSuccess('DRAGGABLE INIT SUCCESSFUL')
})

;(async function() /* START APPLICATION */ {
  await customElements.whenDefined('drag-component')

  const ceil1 = document.querySelector('.row-3 .ceil-1')
  const ceil3 = document.querySelector('.row-2 .ceil-3')
  const ceil2 = document.querySelector('.row-1 .ceil-2')

  const parent1 = document.querySelector(state['drag-1']?.selector)
  const parent2 = document.querySelector(state['drag-2']?.selector)
  const parent3 = document.querySelector(state['drag-3']?.selector)

  const title1 = 'drag me #1'
  const title2 = 'drag me #2'
  const title3 = 'drag me #3'

  const id1 = 'drag-1'
  const id2 = 'drag-2'
  const id3 = 'drag-3'

  const className = 'block drag'

  DRAG.init([{
    parent: parent1 || ceil2,
    node: createDragEl({ id: id1, className, title: title1, ...prepare(id1, 'opened', 50, 2) }),
    ...prepare(id1, 'opened', 50, 2),
    init
  },{
    parent: parent2 || ceil3,
    node: createDragEl({ id: id2, className, title: title2, ...prepare(id2, 'opened', 20, 1) }),
    ...prepare(id2, 'opened', 20, 1),
    init
  },{
    parent: parent3 || ceil1,
    node: createDragEl({ id: id3, className, title: title3, ...prepare(id3, 'opened', 10, 0) }),
    ...prepare(id3, 'opened', 10, 0),
    init
  }])

  /**
  * @param {Emitter} emitter
  * @param {Object[]}map
  */
  function init({ emitter, map })
  {
    const coordsX = this.node.querySelector('.coords__x')
    const coordsY = this.node.querySelector('.coords__y')
    const select = this.node.querySelector('select')

    const presentCoords = () => {
      coordsX.textContent = `${this.left}px`
      coordsY.textContent = `${this.top}px`
    }

    this.node.addEventListener(DRAG.MOUSE.BEFORE_UP, ({ /* detail */ }) => {
      if (!this.belowDroppable) return

      const ceil = findElement(
        this.belowDroppable,
        el => el.className.includes('ceil-')
      )

      if (ceil && !ceil.classList.contains('target')) {
        this.initialParent = ceil
      }
    })

    this.node.addEventListener(DRAG.MOUSE.AFTER_UP, ({ /* detail */ }) => {
      const target = this.belowDroppable?.closest('.droppable')

      if (target) {
        target.style.background = ''
      }

      writeState.call(this)
    })

    this.node.addEventListener(DRAG.COORDS.RECALC, presentCoords)
    this.node.addEventListener(DRAG.MOUSE.MOVE, presentCoords)

    this.node.addEventListener(DRAG.MOUSE.ENTER, () => {
      this.currentDroppable.style.background = 'rgb(151, 171, 232)'
    })

    this.node.addEventListener(DRAG.MOUSE.LEAVE, () => {
      this.currentDroppable.style.background = ''
    })

    select.selectedIndex = ({ 5:0, 10:1, 20:2, 50:3, 75:4 }[this.snap])

    select.addEventListener('change', e => {
      this.node.dataset.snap = `${this.snap = Number(e.target.value)}`
      this.dispatch('snap:changed', this)
    })

    if (!this.node.parentElement) {
      this.insertNode(this.initialParent)
    }
  }

  /**
  * @param {String} id
  * @param {String} className
  * @param {String} title
  * @param {Number=} mode
  * @param {Number=} snap
  * @param {String=} tplId
  * @returns {HTMLElement}
  */
  function createDragEl({ id, className, title, mode = 0, snap = 20 }, tplId = 'draggable-template')
  {
    const tpl = document.getElementById(tplId).content,
      el = tpl.firstElementChild.cloneNode(true)

    el.querySelector('.display__title').textContent = title
    el.querySelector('[data-type="direction"] .fa-solid')
      .classList.add(`fa-${dir[mode]}`)

    el.dataset.mode = `${mode}`
    el.dataset.snap = `${snap}`
    el.className = className
    el.id = id

    return el
  }

  /**
  * @param id
  * @param lockDefault
  * @param snapDefault
  * @param modeDefault
  * @returns {{mode: number, lock: string, snap: number}}
  */
  function prepare(id, lockDefault = 'opened', snapDefault = 20, modeDefault = 0)
  {
    let { lock, snap, mode } = state[id] || {}

    typeof lock !== 'undefined' || (lock = lockDefault)
    typeof snap !== 'undefined' || (snap = snapDefault)
    typeof mode !== 'undefined' || (mode = modeDefault)

    return { lock, snap, mode }
  }

})()

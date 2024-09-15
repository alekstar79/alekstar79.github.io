import { DragAvatar } from './drag-avatar.js'
import { getCoords } from './utils.js'

export class ListDragAvatar extends DragAvatar
{
  /**
  * @param {DragZone} dragZone
  * @param {HTMLElement} dragEl
  */
  constructor(dragZone, dragEl)
  {
    super(dragZone, dragEl)

    this._height = 0
    this._width = 0

    this.mode = 0
  }

  /**
  * @param {MouseEvent} e
  */
  onDragMove(e)
  {
    super.onDragMove(e)

    if (this.mode === 1 || e.target.dataset.notallowed) return

    this._dragZone._el.insertBefore(
      this._dragZoneEl,
      [...this._dragZone._el.querySelectorAll('li:not(.dragging)')]
        .find(sibling => {
          return e.movementY <= 0
            ? e.clientY <= sibling.offsetTop + sibling.offsetHeight
            : e.clientY <= sibling.offsetTop
        })
    )
  }

  /**
  * @param {MouseEvent} e
  * @returns {{ x, y }}
  */
  _resolveCoords(e)
  {
    return {
      x: this.mode === 2 ? this._left : e.pageX - this._shiftX,
      y: this.mode === 1 ? this._top  : e.pageY - this._shiftY
    }
  }

  /**
  * @param {Number} downX
  * @param {Number} downY
  * @param {MouseEvent} event
  * @return {Boolean}
  */
  initFromEvent(downX, downY, event)
  {
    if (!event.target.classList.contains('fa-grip-lines')) {
      return false
    }

    const item = event.target.closest('li')

    if (!item) return false

    this._dragZoneEl = item

    this._shiftX = downX
    this._shiftY = downY

    this._initTransfer()

    return true
  }

  _initTransfer()
  {
    this._el = this._dragZoneEl.cloneNode(true)

    this._dragZoneEl.classList.add('dragging')
    this._el.classList.add('avatar')

    this._measureAvatar()
    this._insertAvatar()
  }

  _measureAvatar()
  {
    const coords = getCoords(this._dragZoneEl)

    this._height = coords.height
    this._width = coords.width

    this._left = coords.left
    this._top = coords.top

    this._shiftX -= this._left
    this._shiftY -= this._top
  }

  _insertAvatar()
  {
    document.body.appendChild(this._el)

    this._el.style.height = `${this._height}px`
    this._el.style.width = `${this._width}px`
    this._el.style.position = 'absolute'
    this._el.style.zIndex = '9999'
  }

  _destroy()
  {
    this._dragZoneEl.classList.remove('dragging')
    this._el.remove()
  }

  onDragCancel()
  {
    this._destroy()
  }

  onDragEnd()
  {
    this._destroy()
  }
}

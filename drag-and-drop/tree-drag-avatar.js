import { DragAvatar } from './drag-avatar.js'
import { getCoords } from './utils.js'

export class TreeDragAvatar extends DragAvatar
{
  /**
  * @param {DragZone} dragZone
  * @param {HTMLElement} dragEl
  */
  constructor(dragZone, dragEl)
  {
    super(dragZone, dragEl)

    this.dump = []
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

    this.dump = Array.from(item.classList)

    this._el = this._dragZoneEl.cloneNode(true)

    this._el.classList.add('avatar', 'collapsed')

    setTimeout(() => {
      this._dragZoneEl.classList.add('collapsed','dragging')
    })

    const coords = getCoords(this._dragZoneEl)

    this._shiftX = downX - coords.left + 30 // todo: correct
    this._shiftY = downY - coords.top

    document.body.appendChild(this._el)

    this._el.style.width = `${coords.width}px`
    this._el.style.position = 'absolute'
    this._el.style.zIndex = '9999'

    return true
  }

  _destroy()
  {
    this._dragZoneEl.classList.remove('collapsed','dragging')
    this._dragZoneEl.classList.add(...this.dump)
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

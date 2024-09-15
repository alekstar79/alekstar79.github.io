import { getElementUnderClientXY } from './utils.js'

/**
* An avatar is an element that is draggable.
* In the simplest case, the avatar is the element itself.
* Also, an avatar can be a cloned element or an icon and anything at all.
*/
export class DragAvatar
{
  /**
  * @param {DragZone} dragZone
  * @param {HTMLElement} dragEl
  */
  constructor(dragZone, dragEl)
  {
    this._currentTargetEl = null

    /** parent transfer zone */
    this._dragZone = dragZone

    /**
    * Element of the parent zone to which the avatar belongs
    * by default - an element corresponding to the entire zone
    * can be refined in initFromEvent.
    */
    this._dragZoneEl = dragEl

    /**
    * Directly the avatar element that will move around the screen.
    * Initialized in initFromEvent.
    */
    this._el = dragEl

    this._shiftX = 0
    this._shiftY = 0

    this._height = 0
    this._width  = 0
  }

  /**
  * Initializes this._el and positions it (specify this._dragZoneEl if necessary)
  * @param {Number} downX X coordinate of mouse click
  * @param {Number} downY Y coordinate of mouse click
  * @param {MouseEvent} event current mouse event
  * @override
  */
  initFromEvent(downX, downY, event)
  {
  }

  /**
  * Returns information about the drop item for the DropTarget.
  * @param {MouseEvent} e
  */
  getDragInfo(e)
  {
    return {
      dragZoneEl: this._dragZoneEl,
      dragZone: this._dragZone,
      el: this._el
    }
  }

  /**
  * Returns the current most deeply nested DOM element under this._el
  * The private property _currentTargetEl is updated on every move.
  * @return {HTMLElement}
  */
  getTargetElem()
  {
    return this._currentTargetEl
  }

  /**
  * Moves this._el on every mouse move
  * and writes the current element under this._el to _currentTargetEl
  * @param {MouseEvent} e
  */
  onDragMove(e)
  {
    const { x, y } = this._resolveCoords(e)

    this._el.style.left = `${x}px`
    this._el.style.top = `${y}px`

    this._currentTargetEl = getElementUnderClientXY(
      x + this._width  / 2,
      y + this._height / 2,
      this._el
    )
  }

  /**
  * @param {MouseEvent} e
  * @returns {{ x, y }}
  * @override
  */
  _resolveCoords(e)
  {
    return {
      x: e.pageX - this._shiftX,
      y: e.pageY - this._shiftY
    }
  }

  /**
  * Actions with the avatar when the transfer failed.
  * For example, you can return the element back or destroy.
  * @override
  */
  onDragCancel()
  {
  }

  /**
  * Actions with the avatar after a successful transfer
  * @override
  */
  onDragEnd()
  {
  }
}

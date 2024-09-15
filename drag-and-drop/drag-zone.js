/**
* The zone from which objects can be moved.
* Able to handle the beginning of the transfer on itself and create an avatar.
*/
export class DragZone
{
  /**
  * @param {HTMLElement} el DOM element to which the zone is bound
  */
  constructor(el)
  {
    el.dragZone = this

    this._el = el
  }

  /**
  * Create an avatar corresponding to the zone.
  * Different zones can have different types of avatars.
  * @override
  */
  _makeAvatar()
  {
  }

  /**
  * Handles the start of the transfer.
  * Gets the coordinates of the initial mouse click event.
  * @param {Number} downX Initial X coordinate
  * @param {Number} downY Initial Y coordinate
  * @param {MouseEvent} event current mouse event
  * @return {DragAvatar|Boolean} avatar or false if nothing can be captured from this point
  */
  onDragStart(downX, downY, event)
  {
    const avatar = this._makeAvatar()

    if (!avatar.initFromEvent(downX, downY, event)) {
      return false
    }

    return avatar
  }
}

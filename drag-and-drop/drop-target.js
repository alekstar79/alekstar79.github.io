export class DropTarget
{
  /**
  * @param {HTMLElement} el
  */
  constructor(el)
  {
    /** The element the avatar is currently over */
    this._targetEl = null

    el.dropTarget = this

    this._el = el
  }

  /**
  * Returns the DOM element the avatar is currently over
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @return {HTMLElement}
  * @override
  */
  _getTargetElem(avatar, event)
  {
    return this._el
  }

  /**
  * Called when the avatar leaves the current this._targetEl
  * @override
  */
  _hideHoverIndication(avatar)
  {
  }

  /**
  * Called when the avatar enter at a new this._targetEl
  * @override
  */
  _showHoverIndication(avatar)
  {
  }

  /**
  * The method is called every time the avatar moves
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  */
  onDragMove(avatar, event)
  {
    const newTargetEl = this._getTargetElem(avatar, event)

    if (this._targetEl !== newTargetEl) {
      this._hideHoverIndication(avatar)
      this._targetEl = newTargetEl
      this._showHoverIndication(avatar)
    }
  }

  /**
  * Completion of the transfer.
  * Processing algorithm (redefine the function and implement in the descendant):
  *  1. Get drag information from avatar.getDragInfo()
  *  2. Determine if transfer to _targetEl is possible (if any)
  *  3. Call avatar.onDragEnd() or avatar.onDragCancel()
  *    If you need to confirm the transfer with a request to the server, then avatar.onDragEnd(),
  *    and then asynchronously if the server returned an error, avatar.onDragCancel()
  *    In this case, the avatar must be able to "rollback" after onDragEnd.
  *
  * On any completion of this method requires (done below):
  *  - remove current transfer indication
  *  - reset this._targetEl
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @override
  */
  onDragEnd(avatar, event)
  {
    this._hideHoverIndication(avatar)
    this._targetEl = null
  }

  /**
  * Avatar entry to DropTarget
  * @param {HTMLElement} fromDropTarget
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @override
  */
  onDragEnter(fromDropTarget, avatar, event)
  {
  }

  /**
  * Avatar leave DropTarget
  * @param {HTMLElement} toDropTarget
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @override
  */
  onDragLeave(toDropTarget, avatar, event)
  {
    this._hideHoverIndication(avatar)
    this._targetEl = null
  }
}

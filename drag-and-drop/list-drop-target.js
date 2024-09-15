import { DropTarget } from './drop-target.js'

export class ListDropTarget extends DropTarget
{
  /**
  * @param {HTMLElement} el
  */
  constructor(el)
  {
    super(el)
  }

  /**
  * @param {DragAvatar} avatar
  * @private
  */
  _showHoverIndication(avatar)
  {
    this._targetEl && this._targetEl.classList.add('hover')
  }

  /**
  * @param {DragAvatar} avatar
  * @private
  */
  _hideHoverIndication(avatar)
  {
    this._targetEl && this._targetEl.classList.remove('hover')
  }

  /**
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @return {?HTMLElement}
  * @private
  */
  _getTargetElem(avatar, event)
  {
    const target = avatar.getTargetElem()

    return target
      ? target.closest('li')
      : null
  }

  onDragEnd(avatar, event)
  {
    // transfer ended outside the suitable point
    if (!this._targetEl) {
      return avatar.onDragCancel()
    }

    this._hideHoverIndication(avatar)

    // get info about the transfer object
    const { dragZoneEl } = avatar.getDragInfo(event)

    avatar.onDragEnd()

    this._targetEl.parentNode.insertBefore(dragZoneEl, this._targetEl)

    this._targetEl = null
  }
}

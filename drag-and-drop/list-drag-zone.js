import { ListDragAvatar } from './list-drag-avatar.js'
import { DragZone } from './drag-zone.js'

export class ListDragZone extends DragZone
{
  /**
  * @param {HTMLElement} el
  */
  constructor(el)
  {
    super(el)
  }

  _makeAvatar()
  {
    return new ListDragAvatar(this, this._el)
  }
}

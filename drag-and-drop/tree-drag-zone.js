import { TreeDragAvatar } from './tree-drag-avatar.js'
import { DragZone } from './drag-zone.js'

export class TreeDragZone extends DragZone
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
    return new TreeDragAvatar(this, this._el)
  }
}

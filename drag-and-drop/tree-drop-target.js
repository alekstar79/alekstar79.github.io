import { getElementUnderClientXY } from './utils.js'
import { DropTarget } from './drop-target.js'

export class TreeDropTarget extends DropTarget
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
  * TODO: implement the getter of the target element
  * @param {DragAvatar} avatar
  * @param {MouseEvent} event
  * @return {*}
  * @private
  */
  _getTargetElem(avatar, event)
  {
    /* const target = avatar.getTargetElem()

    if (!target || target.tagName !== 'SPAN') return

    // check if the node can be moved inside itself
    const elToMove = avatar.getDragInfo(event).dragZoneEl.parentNode

    let el = target

    while (el) {
      if (el === elToMove) return // attempt to move parent to child
      el = el.parentNode
    }

    return target */

    /* let target = avatar.getTargetElem()
    let out = target ? target.closest('.item.column') : null */

    /* if (event.movementY >= 0) {
      target.insertAdjacentElement('beforebegin', dragZoneEl)
    } else {
      target.insertAdjacentElement('afterend', dragZoneEl)
    } */

    let { dragZoneEl } = avatar.getDragInfo(event)
    let target = getElementUnderClientXY(event.clientX, event.clientY, avatar._el)

    if (!(target = target.closest('.item.column')) || target.classList.contains('root')) {
      return
    }
    if (target.classList.contains('collapsed')) {
      target.classList.remove('collapsed')
    }

    target = target.closest('.sortable-list')

    try {

      target.insertBefore(
        dragZoneEl,
        [...document.querySelectorAll('.item:not(.dragging)')].find(sibling => {
          return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
        })
      )

    } catch (e) {
    }

    return target
  }

  onDragEnd(avatar, event)
  {
    // transfer ended outside the suitable point
    if (!this._targetEl) {
      return avatar.onDragCancel()
    }

    this._hideHoverIndication(avatar)

    // get information about the transfer object
    // const { dragZoneEl } = avatar.getDragInfo(event)

    avatar.onDragEnd()

    // insert element into children in sorted order
    // const elToMove = dragZoneEl.parentNode // <LI>
    // const title = dragZoneEl.innerHTML     // переносимый заголовок

    // get the tree node container corresponding to the landing point
    // let ul = this._targetEl.parentNode //.getElementsByTagName('UL')[0]

    /* if (!ul) { // if there are no children, then create a container
      this._targetEl.parentNode.appendChild(
        ul = document.createElement('UL')
      )
    } */

    // insert a new node at the right place among the descendants
    /* let li = null

    for (let i = 0; i < ul.children.length; i++) {
      li = ul.children[i]

      if (li.children[0].innerHTML > title) {
        break
      }

      li = null
    } */

    // ul.insertBefore(elToMove, li)

    this._targetEl = null
  }
}

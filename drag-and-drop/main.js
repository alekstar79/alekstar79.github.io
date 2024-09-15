import { ListDropTarget } from './list-drop-target.js'
import { TreeDropTarget } from './tree-drop-target.js'
import { ListDragZone } from './list-drag-zone.js'
import { TreeDragZone } from './tree-drag-zone.js'

import { collapseBlock } from './utils.js'

import './event-manager.js'
import './create-list.js'
// import './create-tree.js'

const list = document.querySelector('.list')
const tree = document.querySelector('.tree')

try {

  new ListDropTarget(list)
  new ListDragZone(list)

} catch (e) {
}

try {

  new TreeDropTarget(tree)
  new TreeDragZone(tree)

  collapseBlock(document.querySelector('.container'))

} catch (e) {
}

import { Draggable } from './draggable.js'

export class App extends Draggable
{
  /**
  * @type {[]}
  */
  static map = Draggable.map

  /**
  * @param {Object[]} elements
  */
  static init(elements)
  {
    for (const set of elements) {
      App.map.push(new App(set))
    }
  }

  /**
  * @param {DraggableOptions}
  */
  constructor({ node, init, exclude, mode, snap, mobile })
  {
    super({ node, init, exclude, mode, snap, mobile })

    this.set()
  }

  // Here is the code that extends the Draggable base class

  /**
  * @param {HTMLElement|String} to
  * @param {InsertPosition} where
  */
  restorePosition(to, where = 'beforeend')
  {
    if ((to = document.querySelector(to))) {
      this.insertNode(to, where)
    }
  }
}

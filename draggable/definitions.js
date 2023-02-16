import { HTMLDragElement } from './components/drag-component.js'
import { HTMLStubElement } from './components/stub-component.js'

customElements.define('drag-component', HTMLDragElement, { extends: 'div' })
customElements.define('stub-component', HTMLStubElement)

// noinspection JSUnusedGlobalSymbols

export class HTMLDragElement extends HTMLDivElement
{
  static get observedAttributes()
  {
    return ['style', 'draggable', 'data-dir']
  }

  constructor()
  {
    super()

    // let content = document.getElementById('draggable-template').content
    // const shadowRoot = this.attachShadow({ mode: 'open' })
    // shadowRoot.appendChild(content.cloneNode(true))
    // this.innerHTML = '<p>Drag Component</p>'
  }

  connectedCallback()
  {
    // when an element is added to the document (may be called many times if the element is added/removed multiple times)
  }

  disconnectedCallback()
  {
    // when an element is removed from the document (may be called many times if the element is added/removed multiple times)
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    // called when one of the above attributes changes (observedAttributes)
  }

  adoptedCallback()
  {
    // when moving an element to a new document (occurs in document.adoptNode, rarely used)
  }
}

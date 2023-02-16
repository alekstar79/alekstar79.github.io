export class HTMLStubElement extends HTMLElement
{
  constructor() {
    super()

    this.id = 'none'
  }

  /**
  * @param {string} qualifiedName
  */
  getAttribute(qualifiedName)
  {
    throw new Error('*')
  }
}

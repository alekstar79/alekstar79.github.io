import { createStyleLinks, STYLES } from '../utils/index.js'
import footer from '../templates/bottom-content.js'

export default class BottomContent extends HTMLElement
{
  get theme()
  {
    return this.getAttribute('theme')
  }

  set theme(value)
  {
    this.setAttribute('theme', value)
  }

  get color()
  {
    return this.theme === 'dark' ? '#FFFFFF' : '#292421'
  }

  constructor()
  {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = footer(this.theme === 'light' ? '-light' : '', this.color, new Date().getFullYear())

    const content = this.shadowRoot.querySelector('.bottom-content')

    content.classList.add(`content--${this.theme}`)

    createStyleLinks(STYLES.FOOTER)
      .forEach(link => {
        this.shadowRoot.insertBefore(link, content)
      })
  }

  connectedCallback()
  {
    // do something...
  }
}

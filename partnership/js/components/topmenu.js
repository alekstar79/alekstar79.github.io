import { createStyleLinks, clickOutside, isMobile, STYLES } from '../utils/index.js'
import topmenu from '../templates/topmenu.js'

export default class TopMenu extends HTMLElement
{
  /* static get observedAttributes()
  {
    return ['theme']
  } */

  get needTouchMenu()
  {
    return isMobile.any || (isMobile.Firefox && isMobile.touchEnabled)
  }

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

    this.shadowRoot.innerHTML = topmenu(this.color)

    const content = this.shadowRoot.querySelector('.top-toolbar')

    content.classList.add(`top-toolbar--${this.theme}`)

    createStyleLinks(STYLES.TOPMENU)
      .forEach(link => {
        this.shadowRoot.insertBefore(link, content)
      })

    if (this.needTouchMenu) {
      this.setupTouchMenu()
    }
  }

  connectedCallback()
  {
    // do something...
  }

  /* attributeChangedCallback(name, ov, nv)
  {
    this[name] = nv
  } */

  setupTouchMenu()
  {
    this.shadowRoot.querySelectorAll('.menu__item--sub')
      .forEach(this.setupMenuItem)

    this.shadowRoot.querySelector('.top-toolbar')
      .classList.add('touch')
  }

  setupMenuItem(item)
  {
    const submenu = item.querySelector('.menu__submenu')

    item.addEventListener('pointerdown', () => {
      submenu.classList.toggle('menu__submenu--open')
      item.classList.toggle('menu__item--active')
    })

    clickOutside(item, () => {
      submenu.classList.remove('menu__submenu--open')
      item.classList.remove('menu__item--active')
    })
  }
}

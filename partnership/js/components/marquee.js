import { createStyleLinks, STYLES } from '../utils/index.js'
import { Marquee } from '../libs/marquee.js'

import marquee from '../templates/marquee.js'

export default class MarqueeComponent extends HTMLElement
{
  get theme()
  {
    return this.getAttribute('theme')
  }

  set theme(value)
  {
    this.setAttribute('theme', value)
  }

  constructor()
  {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = marquee()

    createStyleLinks(STYLES.MARQUEE)
      .forEach(link => {
        this.shadowRoot.insertBefore(link, this.shadowRoot.querySelector('.marquee-container'))
      })

    Marquee.init(
      this.querySelector('.items'),
      {
        textcolor: 'rgba(255, 255, 255, 1)',
        bgcolor: 'rgba(41, 36, 33, 1)'
      }
    )
  }

  connectedCallback()
  {
    // do something...
  }
}

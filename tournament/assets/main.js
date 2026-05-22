import { ready, initScrollAnimations } from './utils.js'
import { setupAllTickers } from './ticker.js'
import { bindStagesCarousel } from './stagesCarousel.js'
import { setupInfiniteCarousel } from './participantsCarousel.js'

/**
 * Точка входа. Дожидается готовности DOM, затем инициализирует тикеры, карусели и анимации.
 */
;(async function main() {
  await ready()

  setupAllTickers()

  document.querySelectorAll('[data-carousel]')
    .forEach(root => {
      if (root.dataset.carousel === 'participants') {
        setupInfiniteCarousel(root)
      } else {
        bindStagesCarousel(root)
      }
    })

  initScrollAnimations()
})()

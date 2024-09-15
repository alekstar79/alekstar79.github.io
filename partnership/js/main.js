import { MediaTracker, emitter, initObserver, BREACKPOINTS, WIDTH_795, WIDTH_991, WIDTH_768, WIDTH_425 } from './utils/index.js'

import './definitions.js'

function observe(target, impact)
{
  target = document.querySelector(target)
  impact = document.querySelector(impact)

  return initObserver(target, entry => {
    if (!impact) return

    if (entry.isIntersecting) {
      impact.style.display = 'none'
    } else {
      impact.style.display = 'block'
    }
  })
}

/**
* Application scope
*/
window.addEventListener('DOMContentLoaded', async function() {
  const media = new MediaTracker(BREACKPOINTS)

  const first = document.querySelector('section.first')
  const image = document.querySelector('img.bg-image')

  emitter.on('match:media', screen => {
    switch (screen.width) {
      case 991:
        // do something...
        break

      case 795:
        if (screen.max) {
          first.classList.remove('cell__7')
          image.classList.remove('mt-5')
          first.classList.add('mx-auto')

        } else {
          first.classList.remove('mx-auto')
          first.classList.add('cell__7')
          image.classList.add('mt-5')
        }
        break

      case 768:
        // do something...
        break

      case 425:
        // do something...
    }
  })

  await Promise.all([
    customElements.whenDefined('top-menu'),
    customElements.whenDefined('bottom-content'),
    customElements.whenDefined('marquee-component')
  ])

  observe('footer', 'marquee-component')

  media
    .setHandler(screenMode => {
      emitter.emit('match:media', screenMode)
    })
    .updateSize(WIDTH_991)
    .updateSize(WIDTH_795)
    .updateSize(WIDTH_768)
    .updateSize(WIDTH_425)

    .onTrack()
})

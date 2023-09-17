const isMobile = {}

Object.defineProperties(isMobile, {
  touchEnabled: {
    enumerable: true,
    get() {
      if (
        ('ontouchstart' in window) || window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch) ||
        (navigator.MaxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)
      ) {
        return true
      }

      return window.matchMedia([
        '(', ' -webkit- -moz- -o- -ms- '.split(' ').join('touch-enabled),('), 'heartz', ')'
      ].join('')).matches
    }
  },
  any: {
    enumerable: true,
    get() {
      return Boolean(
        (isMobile.Android || isMobile.BlackBerry || isMobile.iOS || isMobile.Opera || isMobile.Windows) ||
        isMobile.touchEnabled
      )
    }
  },
  Android: {
    enumerable: true,
    get() {
      return /Android/i.test(navigator.userAgent)
    }
  },
  BlackBerry: {
    enumerable: true,
    get() {
      return /BlackBerry/i.test(navigator.userAgent)
    }
  },
  iOS: {
    enumerable: true,
    get() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    }
  },
  Opera: {
    enumerable: true,
    get() {
      return /Opera Mini/i.test(navigator.userAgent)
    }
  },
  Windows: {
    enumerable: true,
    get() {
      return /IEMobile/i.test(navigator.userAgent)
    }
  }
})

function setupMenu()
{
  document.querySelector('.top-toolbar').classList.add('touch')

  document.querySelectorAll('.menu__item--sub')
    .forEach(item => {
      const submenu = item.querySelector('.menu__submenu')

      item.addEventListener('pointerdown', () => {
        submenu.classList.toggle('menu__submenu--open')
        item.classList.toggle('menu__item--active')
      })

      clickOutside(item, () => {
        submenu.classList.remove('menu__submenu--open')
        item.classList.remove('menu__item--active')
      })
    })
}

function clickOutside(el, callback)
{
  document.body.addEventListener('pointerdown', event => {
    if (!(el === event.target || el.contains(event.target))) {
      callback(event)
    }
  })
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.copyright .year').textContent = `${new Date().getFullYear()}`

  if (isMobile.any) {
    setupMenu()
  }
})

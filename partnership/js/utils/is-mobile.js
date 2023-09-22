const query = ['(', ' -webkit- -moz- -o- -ms- '.split(' ').join('touch-enabled),('), 'heartz', ')'].join('')

export const isMobile = Object.defineProperties({}, {
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

      return window.matchMedia(query).matches
    }
  },
  any: {
    enumerable: true,
    get() {
      return Boolean(isMobile.Android || isMobile.BlackBerry || isMobile.iOS || isMobile.Opera || isMobile.Windows)
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
  Firefox: {
    enumerable: true,
    get() {
      return /Firefox/i.test(navigator.userAgent)
    }
  },
  Windows: {
    enumerable: true,
    get() {
      return /IEMobile/i.test(navigator.userAgent)
    }
  }
})

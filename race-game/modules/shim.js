/**
* @type {function(cb: Function): Number} window.requestAnimationFrame
*/
window.requestAnimationFrame || (window.requestAnimationFrame = (function() {
  let ios6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent),
    rAF = window.requestAnimationFrame

  if (typeof rAF !== 'function' || ios6) {
    (['webkit','moz','o','ms']).some(p => {
      if (window[p + 'RequestAnimationFrame']) {
        rAF = window[p + 'RequestAnimationFrame']
        return true
      }

      return false
    })
  }

  return rAF
})())

/**
* @type {function(requestId: Number): void} window.cancelAnimationFrame
*/
window.cancelAnimationFrame || (window.cancelAnimationFrame = (function() {
  let ios6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent),
    cAF = window.cancelAnimationFrame

  if (typeof cAF !== 'function' || ios6) {
    (['webkit','moz','o','ms']).some(p => {
      if (window[p + 'CancelAnimationFrame']) {
        cAF = window[p + 'CancelAnimationFrame'] || window[p + 'CancelRequestAnimationFrame']
        return true
      }

      return false
    })
  }

  return cAF
})())

/**
* @typedef {Performance} performance
* @property {function(): DOMHighResTimeStamp} performance.now
*/
window.performance || (window.performance = (function() {
  const wP = window.performance || {}

  if (typeof wP.now !== 'function') {
    (['webkit','moz','o','ms']).some(p => {
      if (wP[p + 'Now']) {
        wP.now = wP[p + 'Now']
        return true
      }

      return false
    })
  }

  return wP
})())

export const rAF = window.requestAnimationFrame
export const cAF = window.cancelAnimationFrame
export const wPN = window.performance.now

const HINT_CLASS = 'hint__show'

/**
* @param {number} ms
* @returns {Promise}
*/
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/** @param {HTMLDivElement} hint */
const show = hint => hint.classList.add(HINT_CLASS)

/** @param {HTMLDivElement} hint */
const hide = hint => hint.classList.remove(HINT_CLASS)

/** @param {HTMLDivElement} hint */
const showHideHandler = hint => delay(1000)
  .then(show.bind(null, hint))
  .then(delay.bind(null, 3000))
  .then(hide.bind(null, hint))

document.querySelectorAll('.hint')
  .forEach(showHideHandler)

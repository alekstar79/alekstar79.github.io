import { PHRASE, SELECTOR } from '../config.js'

/**
 * @param {HTMLButtonElement} btn
 * @param {String} action
 */
export function btnTune(btn, action)
{
  btn.classList.add('btn', SELECTOR[action])
  btn.textContent = PHRASE[action]
}

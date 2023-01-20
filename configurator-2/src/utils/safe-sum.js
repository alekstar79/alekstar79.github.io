import { SCREEN, PHRASE } from '../config.js'

/**
 * Safe summation using eval.
 * @param {String|Number} x
 * @param {String|Number} y
 * @param {String} postfix
 * @return {String}
 */
export function safeSum(x, y, postfix = ' ₽')
{
  const prefix = window.innerWidth > SCREEN.MIN_WIDTH ? PHRASE.TOTAL_COST : ''

  try {

    return prefix + eval(`${x} + ${y}`) + postfix
  } catch (e) {
    return prefix + (x || '0') + postfix
  }
}

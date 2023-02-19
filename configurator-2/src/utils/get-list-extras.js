import { findElement } from './find-element.js'
import { SELECTOR } from '../config.js'

/**
 * Auxiliary function for finding root nodes extra-charge
 * @param {Element|Node} el
 * @return {NodeList}
 */
export function getListExtras(el)
{
  return findElement(SELECTOR.ACCORDION_CONTENT, el).querySelectorAll('div + div')
}

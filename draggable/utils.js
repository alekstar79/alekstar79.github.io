// noinspection JSUnusedGlobalSymbols

import { HTMLStubElement } from './components/stub-component.js'

/**
* @param {String} text
*/
export function initSuccess(text)
{
  console.log(`%c${text}`, 'text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 1.6em;')
}

/**
* @param {Number} v
* @param {Number=} l
* @param {Number=} h
* @param {Number=} d
* @returns {Number}
*/
export function clamp(v, l = 0, h = 1080, d = 0)
{
  if (typeof v === 'undefined' || Number.isNaN(v)) v = d

  return v > h ? h : v < l ? l : v + .5 | 0
}

/**
* @param {MouseEvent} e
* @returns {{x: Number, y: Number}}
*/
export const mouse = e => ({ x: e.clientX || e.pageX, y: e.clientY || e.pageY })

/**
* @param {TouchEvent} e
* @returns {{x: Number, y: Number}}
*/
export const touches = e => ({ x: e.touches[0].pageX, y: e.touches[0].pageY })

/**
* @param {MouseEvent|TouchEvent} e
* @returns {{x: Number, y: Number}}
*/
export const coords = e => e.touches?.length ? touches(e) : mouse(e)

/**
* @param {Function} fn
* @param {Number} ms
* @returns {(function(...[*]): void)}
*/
export function debounce(fn, ms = 15)
{
  let debounceTimeout

  return function(...args) {
    debounceTimeout && clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(
      fn.bind(this, ...args),
      ms
    )
  }
}

/**
* @param {HTMLElement} el
* @returns {String}
*/
export function buildPath(el)
{
  let path = ''

  while (el) {
    el = el.parentElement

    path = `.${el.className}${path ? ' > ' + path : ''}`

    if (el.className.includes('row-')) {
      break
    }
  }

  return path
}

/**
* @param {HTMLElement} el
* @param {function(el: HTMLElement): Boolean} callback
* @returns {HTMLElement}
*/
export function findElement(el, callback)
{
  while (el) {
    if (callback(el)) {
      break
    }

    el = el.parentElement
  }

  return el || new HTMLStubElement()
}

export function ignore(promise)
{
  promise && promise.catch(noop)
}

export function noop() {}

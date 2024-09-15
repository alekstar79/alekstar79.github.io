let timeoutId

/**
* Simple debounce function
* @param {Function} fn
* @param {Number} ms
* @return {Function}
*/
export function debounce(fn, ms = 9)
{
  return function(...args) {
    timeoutId && clearTimeout(timeoutId)

    timeoutId = setTimeout(
      fn.bind(this, ...args),
      ms
    )
  }
}

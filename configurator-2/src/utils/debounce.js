let debounceTimeout

/**
 * Simple debounce function.
 * @param {Function} fn
 * @param {Number} ms
 * @return {Function}
 */
export function debounce(fn, ms = 9)
{
  return function(...args) {
    debounceTimeout && clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(
        fn.bind(this, ...args),
        ms
    )
  }
}

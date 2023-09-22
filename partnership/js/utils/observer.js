/**
* @param {HTMLElement} target
* @param {Function} callback
* @returns {IntersectionObserver}
*/
export function initObserver(target, callback)
{
  const options = { root: null, rootMargin: '0px', threshold: 0 }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      callback(entry)
    })
  }, options)

  observer.observe(target)

  return observer
}

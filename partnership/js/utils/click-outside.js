/**
* @param {HTMLElement} el
* @param {function(e: PointerEvent): void} callback
*/
export function clickOutside(el, callback)
{
  const check = (target, e) => !(el === target || el.contains(target)) && callback(e)

  document.body.addEventListener('pointerdown', e => {
    const { target } = e

    if (target.shadowRoot?.children.length) {
      return check(e.composedPath()[0], e)
    }

    check(target, e)
  })
}

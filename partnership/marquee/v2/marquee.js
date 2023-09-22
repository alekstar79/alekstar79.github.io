/** @see https://codepen.io/pprakash/pen/oNxNeQE */

function Marquee(selector, speed)
{
  const el = document.querySelector(selector)
  const firstElement = el.children[0]
  const clone = el.innerHTML

  let i = 0

  el.insertAdjacentHTML('beforeend', clone)
  el.insertAdjacentHTML('beforeend', clone)

  setInterval(() => {
    firstElement.style.marginLeft = `-${i}px`

    if (i > firstElement.clientWidth) {
      i = 0
    }
    i += speed

  }, 0)
}

window.addEventListener('load', () => {
  Marquee('.marquee', .2)
})

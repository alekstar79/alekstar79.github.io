// noinspection JSDeprecatedSymbols

export function findNearestCollapsingBlock(el)
{
  while (el && el !== document && !el.classList.contains('item')) {
    el = el.parentNode
  }

  return el
}

export function collapseBlock(container)
{
  container.addEventListener('click', e => {
    const btn = e.target.closest('.collapsed__toggler')
    const target = findNearestCollapsingBlock(btn)

    target?.classList.toggle('collapsed')
  })
}

export function getCoords(el)
{
  const box = el.getBoundingClientRect()

  const html = document.documentElement
  const body = document.body

  const scrollLeft = window.pageXOffset || html.scrollLeft || body.scrollLeft
  const scrollTop = window.pageYOffset || html.scrollTop || body.scrollTop

  const clientLeft = html.clientLeft || body.clientLeft || 0
  const clientTop = html.clientTop || body.clientTop || 0

  const left = box.left + scrollLeft - clientLeft
  const top = box.top + scrollTop - clientTop

  return {
    left: Math.round(left),
    top: Math.round(top),
    height: box.height,
    width: box.width
  }
}

export function getElementUnderClientXY(x, y, el)
{
  let target, display = el.style.display || ''

  el.style.display = 'none'
  target = document.elementFromPoint(x, y)
  el.style.display = display

  if (!target || target === document) {
    target = document.body
  }

  return target
}

window.addEventListener('load', function() {
  const context = document.querySelector('.context:not(.sub)'),
    c1 = document.querySelector('#c1'),
    c2 = document.querySelector('#c2')

  function pointerdown({ target })
  {
    if (!target.closest('.context') && target !== context && target !== c1 && target !== c2) {
      document.removeEventListener('pointerdown', pointerdown)
      context.classList.remove('is-visible')
    }
  }

  document.addEventListener('contextmenu', e => {
    const sub = context.querySelectorAll('.sub')

    sub.forEach(el => {
      el.classList.remove('oppositeX','oppositeY')
    })

    e.preventDefault()

    const w = context.offsetWidth
    const h = context.offsetHeight

    const ww = window.innerWidth
    const wh = window.innerHeight

    const x = e.clientX
    const y = e.clientY

    const padx = 30
    const pady = 20

    let fx = x
    let fy = y

    let hitsRight = x + w >= ww - padx
    let hitsBottom = y + h >= wh - pady

    if (hitsRight) {
      fx = ww - w - padx
    }
    if (hitsBottom) {
      fy = wh - h - pady
    }

    Object.assign(context.style, {
      left: `${fx - 1}px`,
      top: `${fy - 1}px`
    })

    sub.forEach(el => {
      const rect = el.getBoundingClientRect()

      const sw = rect.width
      const sh = rect.height

      const sx = rect.left
      const sy = rect.top

      const subHitsRight = sx + sw - padx >= ww - padx
      const subHitsBottom = sy + sh - pady >= wh - pady

      if (subHitsRight) {
        el.classList.add('oppositeX')
      }
      if (subHitsBottom) {
        el.classList.add('oppositeY')
      }
    })

    document.addEventListener('pointerdown', pointerdown)

    context.classList.add('is-visible')
  })

  context.addEventListener('pointerdown', e => {
    const li = e.target.closest('li:not(.nope)')

    if (li && e.which === 1) {
      [...e.target.parentNode.children]
        .forEach(el => el.classList.remove('active'))

      e.target.classList.add('active')
    }
  })

  c1.addEventListener('change', ({ target }) => {
    document.body.style.setProperty('--color1', target.value)
  })

  c2.addEventListener('change', ({ target }) => {
    document.body.style.setProperty('--color2', target.value)
  })

  // preview
  setTimeout(() => {
    document.dispatchEvent(new Event('contextmenu', { bubbles: true }))

    Object.assign(context.style, {
      left: '32px',
      top: '120px'
    })

    context.classList.add('is-visible')

  }, 500)
})

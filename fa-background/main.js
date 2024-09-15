;(function(icons) {
  const section = document.querySelector('section'),
    div = document.createElement('div'),
    i = document.createElement('i')

  function makeBlockIcons()
  {
    let el, block = div.cloneNode()

    icons.forEach(({ className }) => {
      el = i.cloneNode()

      el.setAttribute('aria-hidden', 'true')
      el.className = `fa ${className}`

      block.appendChild(el)
    })

    return block
  }

  function makeRow()
  {
    let row = div.cloneNode()

    row.className = 'row'

    Array.from({ length: 10 }).forEach(() => {
      row.appendChild(makeBlockIcons())
    })

    return row
  }

  Array.from({ length: 30 }).forEach(() => {
    section.appendChild(makeRow())
  })

})([
  { className: 'fa-address-book-o' },
  { className: 'fa-bath' },
  { className: 'fa-shower' },
  { className: 'fa-thermometer-half' },
  { className: 'fa-balance-scale' },
  { className: 'fa-battery-half' },
  { className: 'fa-bell-o' },
  { className: 'fa-bicycle' },
  { className: 'fa-bolt' },
  { className: 'fa-bullhorn' },
  { className: 'fa-commenting-o' },
  { className: 'fa-comments-o' },
  { className: 'fa-envelope-o' },
  { className: 'fa-gift' },
  { className: 'fa-glass' },
  { className: 'fa-globe' },
  { className: 'fa-graduation-cap' },
  { className: 'fa-heart-o' },
  { className: 'fa-hourglass-end' },
  { className: 'fa-twitter' }
])

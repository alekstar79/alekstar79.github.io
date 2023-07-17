window.addEventListener('load', function() {
  emitter.emit('window:loaded')

  const fn = (_, i) => ({ src: `images/img-${`${i + 1}`.padStart(2, '0')}.jpg`}),
    length = 28

  function createList(container, source, trigger)
  {
    const div = document.createElement('div')

    div.classList.add('gallery', 'grid')

    ;[...source]
      .map(a => ({ value: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
      .forEach(({ src }) => {
        const item = document.createElement('div')

        if (trigger) {
          item.classList.add('image', 'content', 'flow')
          item.innerHTML = `<img src="${src}" alt="" />`
        } else {
          item.classList.add('image')
          item.innerHTML = `<a href="javascript:void(0)">${src}</a>`
        }

        div.appendChild(item)
      })

    container.innerHTML = ''
    container.appendChild(div)

    emitter.emit('list:created')
  }

  const container = document.querySelector('.wrapper')
  const source = Array.from({ length }, fn)

  const checkbox = document.querySelector('input[type="checkbox"]')
  const btn = document.querySelector('.refresh-btn')

  checkbox.addEventListener('change', () => {
    createList(container, source, checkbox.checked)
  })

  btn.addEventListener('click', () => {
    createList(container, source, checkbox.checked)
  })

  /**
  * @typedef {Object} Source
  * @property {String} src
  */

  /**
  * @param {HTMLElement} container
  * @param {Source[]} source
  * @param {Boolean} trigger
  */
  createList(container, source, checkbox.checked)
})

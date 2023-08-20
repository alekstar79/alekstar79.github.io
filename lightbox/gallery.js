window.addEventListener('DOMContentLoaded', function() {
  const fn = (_, i) => ({ src: `img-${`${i + 1}`.padStart(2, '0')}.jpg`}),
    source = Array.from({ length: 28 }, fn)

  const container = document.querySelector('.wrapper')
  const checkbox = document.querySelector('input[type="checkbox"]')
  const btn = document.querySelector('.refresh-btn')

  checkbox.addEventListener('change', () => {
    createList(container, source, checkbox.checked)
      .then(loadImages)
  })

  btn.addEventListener('click', () => {
    createList(container, source, checkbox.checked)
      .then(loadImages)
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
    .then(loadImages)

  emitter.emit('window:loaded')

  function createList(container, source, trigger)
  {
    return new Promise(resolve => {
      const div = document.createElement('div'),
        flow = []

      div.classList.add('gallery', 'grid')

      source
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach(({ src }) => {
          const item = document.createElement('div')

          if (trigger) {
            item.classList.add('image', 'content', 'flow')
            item.style.backgroundImage = `url(images/thumb/${src})`
            item.innerHTML = `<img src="images/${src}" loading="lazy" alt="" />`
            flow.push(item)

          } else {
            item.classList.add('image')
            item.innerHTML = `<a href="javascript:void(0)">${src}</a>`
          }

          div.appendChild(item)
        })

      container.innerHTML = ''
      container.appendChild(div)

      emitter.emit('list:created')

      resolve(flow)
    })
  }

  function loadImages(flow)
  {
    flow.map(div => ({
      loaded: () => div.classList.add('loaded'),
      img: div.querySelector('img')
    }))
      .forEach(({ img, loaded }) => {
        if (!img.complete) {
          img.addEventListener('load', loaded)
        } else {
          loaded()
        }
      })
  }
})

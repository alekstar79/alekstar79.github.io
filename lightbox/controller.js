emitter.on('list:created', function() {
  const gallery = document.querySelector('.gallery')

  gallery.addEventListener('click', onClick)

  function onClick({ target })
  {
    if (!['A','IMG'].includes(target.tagName)) return

    const link = target.src || target.textContent,
      data = {}

    data.list = [...gallery.children]
      .map(({ firstElementChild: el }, idx) => {
        if (link.includes(el.src || el.textContent)) {
          data.currentIdx = idx
        }

        return el.src || el.textContent
      })

    emitter.emit('open', data)
  }
})

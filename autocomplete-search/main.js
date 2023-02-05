const result = document.querySelector('.result-box')
const input = document.querySelector('.input-box')
const content = document.querySelector('.content')
const clear = document.querySelector('.clear')

fetch('/autocomplete.json').then(async keywords => {
  keywords = await keywords.json()

  const span = document.createElement('span')
  const sup = document.createElement('sup')

  const ul = document.createElement('ul')
  const li = document.createElement('li')
  const p  = document.createElement('p')

  input.addEventListener('input', ({ target }) => {
    clear.style.visibility = target.value.length > 0 ? 'visible' : 'hidden'

    render(target.value.length ? filter(target.value) : [])
  })

  clear.addEventListener('click', () => {
    clear.previousElementSibling.value = ''
    clear.style.visibility = 'hidden'

    clearNode(result)

    result.classList.remove('open')
  })

  function filter(v)
  {
    v = v.toLowerCase()

    return keywords.filter(k => {
      return k.title.toLowerCase().includes(v) || k.content.toLowerCase().includes(v)
    })
  }

  function render(filtered)
  {

    clearNode(result)

    result.classList.remove('open')

    if (filtered.length) {
      result.appendChild(makeList(filtered))
      result.classList.add('open')
    }
  }

  function clearNode(node)
  {
    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  function makeList(filtered)
  {
    const list = ul.cloneNode()

    list.addEventListener('click', onclick(filtered))

    for (const item of filtered.map(makeItem)) {
      list.appendChild(item)
    }

    return list
  }

  function onclick(filtered)
  {
    return ({ target }) => {
      const tag = target.closest('li')

      if (tag.tagName.toLowerCase() !== 'li') return

      clearNode(content)
      clearNode(result)

      input.value = tag.querySelector('span').textContent
      result.classList.remove('open')

      content.appendChild(
        makeTextBlock(filtered)
      )
    }
  }

  function makeTextBlock(filtered)
  {
    const text = p.cloneNode()

    text.textContent = filtered.find(w => w.title === input.value).content

    return text
  }

  function makeItem({ title: name, content })
  {
    const title = span.cloneNode(),
      subtitle = sup.cloneNode(),
      item = li.cloneNode()

    subtitle.innerHTML = content
    title.textContent = name

    item.appendChild(title)
    item.appendChild(subtitle)

    return item
  }
})
  .catch(() => {
    input.placeholder = 'Something went wrong, search is temporarily down'
  })

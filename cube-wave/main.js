const root = document.documentElement
const style = getComputedStyle(root)
const length = +style.getPropertyValue('--length')
const ids = style.getPropertyValue('--ids').trim().split(', ')
const section = document.createElement('section')
const form = document.createElement('form')
const input = document.createElement('input')
const output = document.createElement('output')
const list = document.createElement('ul')
const item = document.createElement('li')
const div = document.createElement('div')
const divs = Array.from({ length: 3 }, () => div.cloneNode(true))

form.addEventListener('change', ({ target: { id } }) => {
  form.classList.toggle(id)
})

input.setAttribute('type', 'checkbox');

const inputs = ids.map(id => {
  input.setAttribute('id', id)
  input.setAttribute('title', id)
  return form.appendChild(input.cloneNode(true))
})

item.append(...divs)

form
  .appendChild(section.cloneNode(true))
  .appendChild(output)
  .appendChild(list)
  .append(...Array.from({ length }, () => item.cloneNode(true)))

form.appendChild(section.cloneNode(true)).append(...inputs)

document.body.appendChild(form)

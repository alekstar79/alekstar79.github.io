const container = document.querySelector('.container')

/**
* @typedef {Object} Person
* @property {string} name
* @property {string} img
*/

/**
* @type {Person[]}
*/
const peoples = [
  { name: 'Elon Musk',         img: 'images/elon-musk.jpg'       },
  { name: 'Jeff Bezos',        img: 'images/jeff-bezos.jpg'      },
  { name: 'Bill Gates',        img: 'images/bill-gates.jpg'      },
  { name: 'Warren Buffett',    img: 'images/warren-buffett.jpg'  },
  { name: 'Bernard Arnault',   img: 'images/bernard-arnault.jpg' },
  { name: 'Mark Zuckerberg',   img: 'images/mark-zuckerberg.jpg' },
  { name: 'Michael Bloomberg', img: '' },
  { name: 'Larry Page',        img: '' }
]

/**
* @type {HTMLElement[]}
*/
const list = []

createList(container, peoples)

/**
* @param {HTMLElement} container
* @param {Person[]} source
*/
function createList(container, source)
{
  const ul = document.createElement('ul')

  ul.classList.add('sortable-list', 'list')

  ;[...source]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person) => {
      const item = document.createElement('li')

      item.innerHTML = itemHtml(person)
      item.classList.add('item')

      ul.appendChild(item)
    })

  container.appendChild(ul)

  list.push(ul)
}

/**
* @param {Person} person
* @returns {string}
*/
function itemHtml({ name, img })
{
  img = img.length ? `<img src="${img}" alt="" />` : '<i class="fa-solid fa-user"></i>'

  return `
    <div class="details">
      ${img}
      <span class="person-name">${name}</span>
    </div>
    <i class="fa-solid fa-grip-lines"></i>
  `
}

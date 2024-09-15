const container = document.querySelector('.container')
// const container = document.createElement('div')

/**
* @typedef {Object} Tree
* @property {String} name
* @property {Tree[]} children
*/

/**
* @type {{name: string, children: [{children: [{children: [{name: string}], name: string},{children: [{name: string},{name: string}], name: string}], name: string},{children: [{children: [{name: string},{name: string},{name: string}], name: string},{children: [{name: string},{name: string},{name: string},{name: string}], name: string}], name: string}]}}
*/
const tree = {
  name: 'Древо жизни',
  children: [
    {
      name: 'Грибы',
      children: [
        {
          name: 'Древесные',
          children: [
            { name: 'Чага' }
          ]
        },
        {
          name: 'Наземные',
          children: [
            { name: 'Опята' },
            { name: 'Подосиновики' }
          ]
        }
      ]
    },
    {
      name: 'Животные',
      children: [
        {
          name: 'Земноводные',
          children: [
            { name: 'Лягушки' },
            { name: 'Саламандры' },
            { name: 'Тритоны' }
          ]
        },
        {
          name: 'Млекопитающие',
          children: [
            { name: 'Коровы' },
            { name: 'Ослы' },
            { name: 'Собаки' },
            { name: 'Тигры' },
          ]
        }
      ]
    }
  ]
}

/* class Child
{
  constructor(name)
  {
    this.name = name
  }

  toString()
  {
    return `
      <li class="item column">
        <div class="details border">
          <i class="fa-solid fa-bullet">&bull;</i>
          <span>${this.name}</span>
          <i class="fa-solid fa-grip-lines"></i>
        </div>
      </li>
    `
  }
} */

/* class List
{
  constructor(name = null, list = [])
  {
    this.name = name
    this.list = list
  }

  toString()
  {
    return `
      <ul class="sortable-list">
        <li class="item column">
          <div class="details border">
            <i class="fa-solid fa-bullet">&bull;</i>
            <span>${this.name}</span>
            <i class="fa-solid fa-grip-lines"></i>
          </div>
        </li>
      </ul>
    `
  }
} */

const dfs = (tree) => {
  if (!tree.children) return

  console.log(itemHtml(tree.name))

  tree.children.forEach(dfs)
}


function createTree(container, obj)
{
  container.append(createTreeDom(obj));

  return container
}

function createTreeDom(obj)
{
  const ul = document.createElement('ul')

  ul.classList.add('sortable-list')

  if (obj.name) {
    const li = document.createElement('li')

    li.innerHTML = obj.name

    ul.append(li)
  }
  if (obj.children) {
    let childrenUl

    for (const children of obj.children) {
      childrenUl = createTreeDom(children)
    }

    if (childrenUl) {
      ul.append(childrenUl)
    }
  }

  console.log(ul)

  return ul
}

createTree(container, tree)



/* function createTree(container, source)
{
  const list = document.createElement('ul')

  list.classList.add('sortable-list', 'list')

  ;[...source]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li')

      listItem.innerHTML = itemHtml(person, index)
      listItem.classList.add('item')

      list.appendChild(listItem)
    })

  container.appendChild(list)

  list.push(list)
} */


/**
* @param {string} name
* @returns {string}
*/
function itemHtml(name)
{
  return `
    <div class="details border">
      <button class="collapsed__toggler">
        <i class="fa-solid fa-caret-up"></i>
        <i class="fa-solid fa-caret-down"></i>
      </button>

      <span>${name}</span>
      <i class="fa-solid fa-grip-lines"></i>
    </div>
  `
}

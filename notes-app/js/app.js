// noinspection JSValidateTypes,JSUnusedGlobalSymbols

const template = {
  TITLE: 'Заголовок',
  TEXT: 'Ваш текст',

  /**
  * @param {Object} data
  * @returns {string}
  */
  note({ title = this.TITLE, text = this.TEXT })
  {
    return `
      <div class="note-header">
        <p id="note-title">${title}</p>
        
        <textarea id="note-title-input" class="hidden">${title}</textarea>
        
        <div>
          <button class="note-edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          
          <button class="note-delete">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      
      <p id="note-text">${text}</p>
      
      <textarea id="note-text-input" class="hidden">${text}</textarea>
    `
  }
}

/**
* @class Storage
*/
class Storage
{
  static NOTES = 'notes'

  /**
  * @constructor
  */
  constructor()
  {
    if (localStorage.getItem(Storage.NOTES) === null) {
      localStorage.setItem(Storage.NOTES, '[]')
    }
  }

  /**
  * @returns {{ title: String, text: String }[]}
  */
  readNotes()
  {
    return  JSON.parse(localStorage.getItem(Storage.NOTES) || '[]')
  }

  /**
  * @param {{ title: String, text: String }}
  */
  addNote({ title, text })
  {
    const notes = this.readNotes()

    notes.push({ title, text })

    this.writeNotes(notes)
  }

  /**
  * @param {{ title: String, text: String }[]} notes
  */
  writeNotes(notes)
  {
    localStorage.setItem(Storage.NOTES, JSON.stringify(notes))
  }
}

/**
* @class Note
* @property {Notes} list
* @property {HTMLElement} el
* @property {String} id
* @property {String} title
* @property {String} text
*/
class Note
{
  static create = (list, data) => new Note(list, data)

  /**
  * @constructor
  * @param {Notes} list
  * @param {{ title: String, text: String }} data
  */
  constructor(list, { title, text } = {})
  {
    title ??= template.TITLE
    text ??= template.TEXT

    this.id = (~~(Math.random() * 1e8)).toString(16)

    this.list = list

    this.el = document.createElement('div')

    this.el.innerHTML = template.note({ title, text })
    this.el.classList.add('note')

    this.title = title
    this.text = text

    /** @type Function */
    this.toggleEditMode = this.toggleEditMode.bind(this)

    /** @type Function */
    this.delete = this.delete.bind(this)

    /** @type Function */
    this.editTitle = this.editTitle.bind(this)

    /** @type Function */
    this.editText = this.editText.bind(this)

    this.defineElements()
    this.bindEvents()
  }

  toJson()
  {
    return { title: this.title, text: this.text }
  }

  defineElements()
  {
    this.editBtn = this.el.querySelector('.note-edit')
    this.deleteBtn = this.el.querySelector('.note-delete')

    this.titleEl = this.el.querySelector('#note-title')
    this.textEl = this.el.querySelector('#note-text')

    this.titleInputEl = this.el.querySelector('#note-title-input')
    this.textInputEl = this.el.querySelector('#note-text-input')
  }

  bindEvents()
  {
    this.editBtn.addEventListener('click', this.toggleEditMode)
    this.deleteBtn.addEventListener('click', this.delete)

    this.titleInputEl.addEventListener('input', this.editTitle)
    this.textInputEl.addEventListener('input', this.editText)
  }

  toggleEditMode()
  {
    this.titleEl.classList.toggle('hidden')
    this.textEl.classList.toggle('hidden')

    this.titleInputEl.classList.toggle('hidden')
    this.textInputEl.classList.toggle('hidden')

    this.list.editNote(this)
  }

  editTitle({ target, title })
  {
    title ??= target.value

    this.titleEl.innerText = title
    this.title = title

    return this
  }

  editText({ target, text })
  {
    text ??= target.value

    this.textEl.innerText = text
    this.text = text

    return this
  }

  delete()
  {
    this.el.remove()

    this.list.deleteNote(this.id)

    return this
  }
}

/**
* @class Notes
* @property {HTMLElement} notesEl
* @property {Note[]} list
*/
class Notes
{
  /**
  * @constructor
  * @param {Storage} storage
  */
  constructor(storage)
  {
    this.notesEl = document.querySelector('.notes')

    this.storage = storage

    this.list = []

    storage.readNotes()
      .forEach(data => {
        this.createNote(data, true)
      })
  }

  [Symbol.iterator]()
  {
    let i = 0

    return {
      next: () => ({ value: this.list[i], done: i++ === this.list.length })
    }
  }

  createNote(data, init = false)
  {
    const note = Note.create(this, data)

    this.notesEl.appendChild(note.el)

    if (!init) {
      this.storage.addNote(note.toJson())
    }

    this.list.push(note)

    return this
  }

  editNote(modified)
  {
    let list = this.list.slice()

    list.some((origin, i) => {
      if (origin.id !== modified.id) return false

      return !!(list[i] = modified)
    })

    this.storage.writeNotes(list.map(note => note.toJson()))

    return this
  }

  deleteNote(id)
  {
    let list = this.list.slice()

    if (id && list.length) {
      list = list.filter(item => item.id !== id)
      this.list = list
    }

    list = list.map(note => note.toJson())

    this.storage.writeNotes(list)

    return this
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const addBtn = document.querySelector('.note-add')
  const storage = new Storage()
  const list = new Notes(storage)

  addBtn.addEventListener('click', () => {
    list.createNote(undefined)
  })
})

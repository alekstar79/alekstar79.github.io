// noinspection ES6PreferShortImport

import { Emitter } from '../utils/emitter.js'
import { EVENT, ERROR } from '../config.js'

/**
 * @class Storage
 * @constructor
 *
 * @property {Object[]} selected
 */
export class Storage extends Emitter
{
  constructor()
  {
    super()

    this.selected = []
  }

  /**
   * @param {{ id: Number, name: String, value: String, extra: Object[] }}
   */
  resolve({ id, name, value, extra })
  {
    return this[this.selected.find(c => c.id === id) ? 'deselect' : 'select']({ id, name, value, extra })
  }

  /**
   * @param {{ id: Number, name: String, value: String, extra: Object[] }}
   */
  select({ id, name, value, extra })
  {
    const current = { id, value, extra, name }

    this.selected.push(current)

    this.selected = this.selected.sort((x, y) => x.name.localeCompare(y.name))

    this.emit(EVENT.CHANGED, {
      list: this.selected,
      add: true,
      current
    })

    return 'DEL'
  }

  /**
   * @param {{ id: Number }}
   */
  deselect({ id })
  {
    this.selected = this.selected.filter(c => c.id !== id)

    this.emit(EVENT.CHANGED, {
      list: this.selected,
      current: { id },
      add: false
    })

    return 'ADD'
  }

  /**
   * @param {Object} payload
   */
  change(payload)
  {
    const idx = this.selected.findIndex(c => c.id === payload.id)

    if (idx < 0) {
      throw new StorageError(ERROR.COULD_NOT_BE_FOUND)
    }

    this.selected[idx] = payload

    this.emit(EVENT.CHANGED, {
      current: { id: payload.id },
      list: this.selected,
      change: true
    })
  }

  /**
   * @param {Object} payload
   */
  input(payload)
  {
    const idx = this.selected.findIndex(c => c.id === payload.id)

    if (idx < 0) {
      throw new StorageError(ERROR.COULD_NOT_BE_FOUND)
    }

    this.selected[idx] = payload
  }

  /**
   * @param {{ id: Number }}
   * @return {Object}
   */
  get({ id })
  {
    const obj = this.selected.find(c => c.id === id)

    if (!obj) {
      throw new StorageError(ERROR.COULD_NOT_BE_FOUND)
    }

    return obj
  }
}

export class StorageError extends Error {}

const storage = new Storage()

export default storage

// noinspection JSUnusedGlobalSymbols

window.fakeStorage = {
  _data: {},

  getItem(id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined
  },
  setItem(id, val) {
    this._data[id] = String(val)
  },
  removeItem(id) {
    delete this._data[id]
  },
  clear() {
    this._data = {}
  }
}

function localStorageSupported()
{
  const storage = window.localStorage
  const testKey = 'test'

  try {

    storage.setItem(testKey, '1')
    storage.removeItem(testKey)
    return true

  } catch (error) {
    return false
  }
}

export class StorageManager
{
  constructor()
  {
    this.bestScoreKey = 'bestScore'
    this.gameStateKey = 'gameState'

    this.storage = localStorageSupported()
      ? window.localStorage
      : window.fakeStorage
  }

  getBestScore()
  {
    return this.storage.getItem(this.bestScoreKey) || 0
  }

  setBestScore(score)
  {
    this.storage.setItem(this.bestScoreKey, score)
  }

  getGameState()
  {
    const stateJSON = this.storage.getItem(this.gameStateKey)

    return stateJSON
      ? JSON.parse(stateJSON)
      : null
  }

  setGameState(gameState)
  {
    this.storage.setItem(this.gameStateKey, JSON.stringify(gameState))
  }

  clearGameState()
  {
    this.storage.removeItem(this.gameStateKey)
  }
}

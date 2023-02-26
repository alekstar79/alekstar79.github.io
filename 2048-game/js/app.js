import { KeyboardManager } from './keyboard-manager.js'
import { StorageManager } from './storage-manager.js'
import { HTMLActuator } from './html-actuator.js'
import { GameManager } from './game-manager.js'

import { audio } from './music.js'

window.addEventListener('DOMContentLoaded', async () => {
  let music

  try {

    music = await audio('assets/music.mp3')

  } catch (e) {
  }

  new GameManager(
    new KeyboardManager(),
    new HTMLActuator(),
    new StorageManager(),
    music
  )
})

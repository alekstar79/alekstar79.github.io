const fullscreen = (function(fullscreen) {
  const isEnabled = false, fn = {}

  if (!fullscreen.some(map => {
    if (map[1] in document) {
      for (let i = 0; i < map.length; i++) {
        fn[fullscreen[0][i]] = map[i]
      }

      return true
    }

    return false
  })) {
    return { isEnabled }
  }

  const eventMap = { change: fn.fullscreenchange, error: fn.fullscreenerror },

    handler = {
      toggle(element, options)
      {
        return this.isFullscreen ? this.exit() : this.request(element, options)
      },
      request(element, options)
      {
        return new Promise((resolve, reject) => {
          const onFullScreenEntered = () => {
            this.off('change', onFullScreenEntered)
            resolve(this.isFullscreen)
          }

          this.on('change', onFullScreenEntered)

          element ||= document.documentElement

          let request = element[fn.requestFullscreen](options)

          if (request instanceof Promise) {
            request.then(onFullScreenEntered).catch(reject)
          }
        })
      },
      exit()
      {
        return new Promise((resolve, reject) => {
          if (!this.isFullscreen) return resolve(false)

          const onFullScreenExit = () => {
            this.off('change', onFullScreenExit)
            resolve(this.isFullscreen)
          }

          this.on('change', onFullScreenExit)

          let exit = document[fn.exitFullscreen]()

          if (exit instanceof Promise) {
            exit.then(onFullScreenExit).catch(reject)
          }
        })
      },
      on(event, callback)
      {
        const eventName = eventMap[event]

        if (eventName) {
          document.addEventListener(eventName, callback, false)
        }
      },
      off(event, callback)
      {
        const eventName = eventMap[event]

        if (eventName) {
          document.removeEventListener(eventName, callback, false)
        }
      }
    }

  Object.defineProperties(handler, {
    isFullscreen: {
      get() {
        return Boolean(document[fn.fullscreenElement])
      }
    },
    isEnabled: {
      enumerable: true,
      get() {
        return Boolean(document[fn.fullscreenEnabled])
      }
    },
    element: {
      enumerable: true,
      get() {
        return document[fn.fullscreenElement]
      }
    }
  })

  return handler

})([
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror'
  ],[
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],[
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],[
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror'
  ],[
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError'
  ]
])

const name2code = { ArrowLeft: 37, ArrowRight: 39 }

class PhysicalKey
{
  constructor(keyCode)
  {
    this.keyCode = keyCode
  }

  static fromEvent({ keyCode })
  {
    return new PhysicalKey(keyCode)
  }

  static fromString(s)
  {
    let S = s.toUpperCase(),
      keyCode = null

    if (s.length === 1) {
      return new PhysicalKey(s.toUpperCase().charCodeAt(0))
    }
    if (s in name2code || S in name2code) {
      keyCode = name2code[s] || name2code[S]
    }
    if (!keyCode) {
      throw new Error(`Unknown key name: ${s}`)
    }

    return new PhysicalKey(keyCode)
  }

  equals({ keyCode })
  {
    return this.keyCode === keyCode
  }
}

class KeyCombination
{
  constructor(key)
  {
    this.key = PhysicalKey.fromString(key)
  }

  match(e)
  {
    return this.key.equals(PhysicalKey.fromEvent(e))
  }
}

class Keybind
{
  constructor(kc, handler)
  {
    this.combination = kc
    this.handler = handler
  }
}

class Bindings
{
  static self = null

  static init()
  {
    return Bindings.self ||= new Bindings()
  }

  constructor()
  {
    ['handler','untrack','track','unbind','bind','dispose'].forEach(f => {
      this[f] = this[f].bind(this)
    })

    this.keybinds = new Set()
  }

  handler(e)
  {
    if (e.repeat) return

    for (const kb of this.keybinds) {
      if (!kb.combination.match(e)) continue

      e.stopImmediatePropagation()
      e.preventDefault()

      kb.handler(e)

      break
    }
  }

  on(keys, handler)
  {
    const kb = new Keybind(new KeyCombination(keys), handler)

    this.keybinds.add(kb)

    return kb
  }

  bind(source)
  {
    return source.map(b => this.on(b.keys, b.handler))
  }

  unbind(map)
  {
    map.forEach(kb => this.keybinds.delete(kb))
  }

  track()
  {
    window.addEventListener('keydown', this.handler)
  }

  untrack()
  {
    window.removeEventListener('keydown', this.handler)
  }

  dispose()
  {
    this.keybinds.clear()
  }
}

class Renderer
{
  static instance

  static init = (options) => Renderer.instance ||= new Renderer(options)

  static valueInRange = ({ minScale, maxScale, scale }) => scale <= maxScale && scale >= minScale

  static hasPositionChanged = ({ pos, prevPos }) => pos !== prevPos

  static getTranslate = ({ minScale, maxScale, scale }) => ({ pos, prevPos, translate }) =>
    Renderer.valueInRange({ minScale, maxScale, scale }) &&
    Renderer.hasPositionChanged({ pos, prevPos })
      ? translate + (pos - prevPos * scale) * (1 - 1 / scale)
      : translate

  static getScale = ({ scale, minScale, maxScale, scaleSensitivity, deltaScale }) => {
    let newScale = scale + (deltaScale / (scaleSensitivity / scale))

    newScale = Math.max(minScale, Math.min(newScale, maxScale))

    return [scale, newScale]
  }

  static getMatrix = ({ scale, translateX, translateY, skewX = 0, skewY = 0 }) =>
    `matrix(${scale}, ${skewX}, ${skewY}, ${scale}, ${translateX}, ${translateY})`

  constructor({ minScale, maxScale, element, scaleSensitivity = 10 })
  {
    this.state = {
      element,
      minScale,
      maxScale,
      scaleSensitivity,
      transformation: {
        translateX: 0,
        translateY: 0,
        originX: 0,
        originY: 0,
        scale: 1
      }
    }
  }

  zoom({ x, y, deltaScale })
  {
    const { left, top } = this.state.element.getBoundingClientRect()
    const { minScale, maxScale, scaleSensitivity } = this.state
    const [ scale, newScale ] = Renderer.getScale({
      scale: this.state.transformation.scale,
      scaleSensitivity,
      deltaScale,
      minScale,
      maxScale
    })

    const originX = x - left
    const originY = y - top

    const newOriginX = originX / scale
    const newOriginY = originY / scale

    const translate = Renderer.getTranslate({ scale, minScale, maxScale })

    const translateX = translate({
      translate: this.state.transformation.translateX,
      prevPos: this.state.transformation.originX,
      pos: originX
    })

    const translateY = translate({
      translate: this.state.transformation.translateY,
      prevPos: this.state.transformation.originY,
      pos: originY
    })

    this.state.element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`
    this.state.element.style.transform = Renderer.getMatrix({
      scale: newScale,
      translateX,
      translateY
    })

    this.state.transformation = {
      originX: newOriginX,
      originY: newOriginY,
      scale: newScale,
      translateX,
      translateY
    }
  }

  pan({ originX, originY })
  {
    this.state.transformation.translateX += originX
    this.state.transformation.translateY += originY

    this.state.element.style.transform = Renderer.getMatrix({
      translateX: this.state.transformation.translateX,
      translateY: this.state.transformation.translateY,
      scale: this.state.transformation.scale
    })
  }

  panTo({ originX, originY, scale })
  {
    this.state.transformation.scale = scale

    this.pan({
      originX: originX - this.state.transformation.translateX,
      originY: originY - this.state.transformation.translateY
    })
  }

  panBy({ originX, originY })
  {
    this.pan({ originX, originY })
  }
}

/**
* @property {String[]} gallery
* @property {HTMLElement} previewBox
* @property {HTMLElement} previewImg
* @property {HTMLElement} currentImg
* @property {HTMLElement} totalImg
* @property {HTMLElement} closeIcon
* @property {HTMLElement} prevBtn
* @property {HTMLElement} nextBtn
* @property {HTMLElement} shadow
*/
class Lightbox
{
  static instance

  static init = (keyboard) => Lightbox.instance ||= new Lightbox(keyboard)

  static get = (selector, parent = document) => parent.querySelector(selector)

  static preview = () => {}

  get nextBtnHide()
  {
    return this.newIndex >= this.gallery.length - 1
  }

  get prevBtnHide()
  {
    return this.newIndex === 0
  }

  constructor(keyboard = null)
  {
    const previewBox = Lightbox.get('.preview-box')

    this.previewImg = Lightbox.get('img', previewBox)
    this.imageBox = Lightbox.get('.image-box', previewBox)
    this.currentImg = Lightbox.get('.current-img', previewBox)
    this.expandIcon = Lightbox.get('.fa-expand', previewBox)
    this.closeIcon = Lightbox.get('.fa-times', previewBox)
    this.totalImg = Lightbox.get('.total-img', previewBox)
    this.prevBtn = Lightbox.get('.prev', previewBox)
    this.nextBtn = Lightbox.get('.next', previewBox)
    this.shadow = Lightbox.get('.shadow')

    this.previewBox = previewBox

    this.clickedIndex = 0
    this.newIndex = 0

    this.keyboard = keyboard
    this.gallery = []

    this.bindings()
    this.addListeners()
    this.keybind()
  }

  bindings()
  {
    this.nextBtnClick = this.nextBtnClick.bind(this)
    this.prevBtnClick = this.prevBtnClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
  }

  addListeners()
  {
    this.nextBtn.addEventListener('click', this.nextBtnClick)
    this.prevBtn.addEventListener('click', this.prevBtnClick)

    this.expandIcon.addEventListener('click', this.toggle)
    this.closeIcon.addEventListener('click', this.close)
    this.shadow.addEventListener('click', this.close)
  }

  keybind()
  {
    if (!this.keyboard) return

    this.keyboard.bind([
      { keys: 'ArrowRight', handler: this.nextBtnClick },
      { keys: 'ArrowLeft',  handler: this.prevBtnClick }
    ])

    this.keyboard.track()
  }

  async toggle()
  {
    await fullscreen.toggle(this.previewBox)

    this.imageBox.classList[
      fullscreen.isFullscreen ? 'add' : 'remove'
    ]('fullscreen')
  }

  view()
  {
    Lightbox.preview()

    this.nextBtn.classList[this.nextBtnHide ? 'add' : 'remove']('hide')
    this.prevBtn.classList[this.prevBtnHide ? 'add' : 'remove']('hide')

    this.currentImg.textContent = `${this.newIndex + 1}`
    this.previewImg.src = this.gallery[this.newIndex]
  }

  open(idx, list)
  {
    document.body.style.overflow = 'hidden'

    this.gallery = list
    this.clickedIndex = this.newIndex = idx
    this.totalImg.textContent = `${list.length}`
    this.previewBox.classList.add('show')
    this.shadow.style.display = 'block'

    this.view()
  }

  async close()
  {
    document.body.style.overflow = 'auto'

    this.gallery = []
    this.newIndex = this.clickedIndex
    this.previewBox.classList.remove('show')
    this.shadow.style.display = 'none'

    if (fullscreen.isFullscreen) {
      await this.toggle()
    }
  }

  nextBtnClick()
  {
    if (this.nextBtnHide) return

    this.newIndex++

    this.view()
  }

  prevBtnClick()
  {
    if (this.prevBtnHide) return

    this.newIndex--

    this.view()
  }
}

function whichBtn(e, which = 1)
{
  if (!e.which && e.button) {
    switch (true) {
      case !!(e.button & 1):  // left
        e.which = 1
        break
      case !!(e.button & 2):  // right
        e.which = 3
        break
      case !!(e.button & 4):  // midd
        e.which = 2
        break
    }
  }

  return e.which === which
}

emitter.once('window:loaded', function() {
  const overlay = document.querySelector('.pan-overlay')

  const lightbox = Lightbox.init(Bindings.init())
  const renderer = Renderer.init({
    element: lightbox.previewImg,
    scaleSensitivity: 50,
    minScale: .1,
    maxScale: 30
  })

  emitter.on('open', ({ currentIdx, list }) => {
    lightbox.open(currentIdx, list)
  })

  let down = false

  function panTo()
  {
    renderer.panTo({ originX: 0, originY: 0, scale: 1 })
  }

  function panBy(e)
  {
    e.preventDefault()

    renderer.panBy({
      originX: e.movementX,
      originY: e.movementY
    })
  }

  function wheel(e)
  {
    e.preventDefault()

    renderer.zoom({
      deltaScale: Math.sign(e.deltaY),
      x: e.clientX,
      y: e.clientY
    })
  }

  function panStart(e)
  {
    if (down || !whichBtn(e)) return

    overlay.addEventListener('mousemove', panBy, false)

    down = true
  }

  function panStop()
  {
    overlay.removeEventListener('mousemove', panBy, false)

    down = false
  }

  overlay.addEventListener('mousedown', panStart)
  overlay.addEventListener('mouseup', panStop)
  overlay.addEventListener('dblclick', panTo)
  overlay.addEventListener('wheel', wheel)

  Lightbox.preview = panTo
})

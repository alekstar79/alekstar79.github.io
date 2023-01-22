window.requestAnimationFrame || (window.requestAnimationFrame = (function() {
  let ios6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent),
    rAF = window.requestAnimationFrame

  if (typeof rAF !== 'function' || ios6) {
    (['webkit','moz','o','ms']).some(p => {
      if (window[p + 'RequestAnimationFrame']) {
        rAF = window[p + 'RequestAnimationFrame']
        return true
      }

      return false
    })
  }

  return rAF

})())

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const ctx = document.getElementById('canvas').getContext('2d')

const container = document.querySelector('.container')

const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const slide = document.querySelector('.main__slide')
const sidebar = document.querySelector('.sidebar')

const sCount = slide.querySelectorAll('.slide').length

const height = container.clientHeight

let activeSlideIndex = 0

const target = {},

  tendrils = [],

  settings = {
    friction: 0.5,
    trails: 30,
    size: 50,
    dampening: 0.25,
    tension: 0.98
  }

Math.PI2 = Math.PI * 2

function debounce(fn, ms = 9)
{
  let debounceTimeout

  return function(...args) {
    debounceTimeout && clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(() => {
      fn.apply(null, args)
    }, ms)
  }
}

class Oscillator
{
  get value()
  {
    this.phase += this.frequency

    return this.offset + Math.sin(this.phase) * this.amplitude
  }

  constructor(options = {})
  {
    this.init(options)
  }

  init(options)
  {
    this.phase = options.phase || 0
    this.offset = options.offset || 0
    this.frequency = options.frequency || 0.001
    this.amplitude = options.amplitude || 1
  }
}

class Node
{
  constructor({ x = 0, y = 0 })
  {
    this.x = x
    this.y = y

    this.vy = 0
    this.vx = 0
  }
}

class Tendril
{
  constructor(options = {})
  {
    this.init(options)
  }

  init(options)
  {
    this.spring = options.spring + (Math.random() * 0.1) - 0.05
    this.friction = settings.friction + (Math.random() * 0.01) - 0.005
    this.nodes = []

    for (let i = 0; i < settings.size; i++) {
      this.nodes.push(new Node(target))
    }
  }

  update()
  {
    let spring = this.spring,
      node = this.nodes[0]

    node.vx += (target.x - node.x) * spring
    node.vy += (target.y - node.y) * spring

    for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
      node = this.nodes[i]

      if (i > 0) {
        prev = this.nodes[i - 1]

        node.vx += (prev.x - node.x) * spring
        node.vy += (prev.y - node.y) * spring

        node.vx += prev.vx * settings.dampening
        node.vy += prev.vy * settings.dampening
      }

      node.vx *= this.friction
      node.vy *= this.friction

      node.x += node.vx
      node.y += node.vy

      spring *= settings.tension
    }
  }

  draw()
  {
    let x = this.nodes[0].x,
      y = this.nodes[0].y,

      a, b, i, n

    ctx.beginPath()
    ctx.moveTo(x, y)

    for (i = 1, n = this.nodes.length - 2; i < n; i++) {
      a = this.nodes[i]
      b = this.nodes[i + 1]

      x = (a.x + b.x) * 0.5
      y = (a.y + b.y) * 0.5

      ctx.quadraticCurveTo(a.x, a.y, x, y)
    }

    a = this.nodes[i]
    b = this.nodes[i + 1]

    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
    ctx.stroke()
    ctx.closePath()
  }
}

;(function() {

  function setTransform(idx)
  {
    sidebar.style.transform = `translateY(${idx * height}px)`
    slide.style.transform = `translateY(-${idx * height}px)`
  }

  function changeSlide(direction)
  {
    switch (direction) {
      case 'up':
        activeSlideIndex--

        if (activeSlideIndex < 0) {
          activeSlideIndex = sCount - 1
        }
        break

      case 'down':
        activeSlideIndex++

        if (activeSlideIndex === sCount) {
          activeSlideIndex = 0
        }
    }

    setTransform(activeSlideIndex)
  }

  const debounsedChangeSlide = debounce(changeSlide, 200)

  window.addEventListener('wheel', ({ deltaY }) => {
    debounsedChangeSlide(Math.sign(deltaY) < 0 ? 'up' : 'down')
  })

  upBtn.addEventListener('click', changeSlide.bind(null, 'up'), false)
  downBtn.addEventListener('click', changeSlide.bind(null, 'down'), false)

  sidebar.style.top = `-${(sCount - 1) * 100}vh`

})()

;(function() {

  const color = random(1, 2)
  const hue = new Oscillator({
    phase: Math.random() * Math.PI2,
    frequency: 0.0025,
    amplitude: 85,
    offset: 285
  })

  function init(e)
  {
    document.removeEventListener('touchstart', init)
    document.removeEventListener('mousemove', init)

    document.addEventListener('touchstart', touchstart)
    document.addEventListener('touchmove', mousemove)
    document.addEventListener('mousemove', mousemove)

    if (e instanceof MouseEvent) {
      mousemove(e)
    }

    reset()
    loop()
  }

  function reset()
  {
    tendrils.splice(0,tendrils.length)

    for (let i = 0; i < settings.trails; i++) {
      tendrils.push(new Tendril({
        spring: 0.45 + 0.025 * (i / settings.trails)
      }))
    }
  }

  function clear()
  {
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = '#1D1D1D'

    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  function draw()
  {
    ctx.globalCompositeOperation = 'lighter'
    // ctx.strokeStyle = color === 1 ? 'hsla(346, 100%, 56%, 0.5)' : 'hsla(171, 100%, 56%, 0.5)'
    ctx.strokeStyle = `hsla(${hue.value}, 100%, 50%, 0.7)`
    ctx.lineWidth = 1

    for (let i = 0, tendril; i < settings.trails; i++) {
      tendril = tendrils[i]
      tendril.update()
      tendril.draw()
    }
  }

  function loop()
  {
    if (!ctx.running) return;

    window.requestAnimationFrame(loop)

    clear()
    draw()

    ctx.frame++
  }

  function resize()
  {
    ctx.canvas.height = window.innerHeight
    ctx.canvas.width = window.innerWidth
  }

  function start()
  {
    if (!ctx.running) {
      ctx.running = true
      loop()
    }
  }

  function stop()
  {
    ctx.running = false

    clear()
  }

  function mousemove(e)
  {
    e.preventDefault()

    if (e.touches) {
      target.x = e.touches[0].pageX
      target.y = e.touches[0].pageY
    } else {
      target.x = e.clientX
      target.y = e.clientY
    }
  }

  function touchstart(e)
  {
    if (e.touches.length === 1) {
      target.x = e.touches[0].pageX
      target.y = e.touches[0].pageY
    }
  }

  ctx.running = true
  ctx.frame = 1

  document.addEventListener('touchstart', init)
  document.addEventListener('mousemove', init)

  document.body.addEventListener('orientationchange', resize)

  window.addEventListener('resize', resize)
  window.addEventListener('focus', start)
  window.addEventListener('blur', stop)

  resize()

})()

const Noisy = {
  circle: new Array(40),

  radius: 400,  // 250
  noise: 70,    // 20
  speed: .3,    // .3
  size: 300,    // 400

  color: {
    a: 'hsla(280, 95%, 5%, 1)',     // background
    b: 'hsla(255, 255%, 255%, .8)'  // object
  },

  X(x) {
    return Noisy.c.width / 2 + x
  },
  Y(y) {
    return Noisy.c.height / 2 - y
  },
  Circle: function(i) {
    this.r = Noisy.radius - i * Noisy.radius / Noisy.circle.length
    this.e = !!(i % 2)
    this.max = Math.random() * Noisy.noise
    this.min = -Math.random() * Noisy.noise
    this.val = Math.random() * (this.max - this.min) + this.min
  },
  clear() {
    Noisy.$.fillStyle = Noisy.color.a
    Noisy.$.fillRect(0, 0, Noisy.c.width, Noisy.c.height)
  },
  change(C) {
    for (let i = 0; i < Noisy.size; i++) {
      const a = i * Math.PI * 2 / Noisy.size
      const x = Math.cos(a) * (C.r - C.val * Math.cos(i / 4))
      const y = Math.sin(a) * (C.r - C.val * Math.cos(i / 4))

      Noisy.$.fillStyle = Noisy.color.b
      Noisy.$.fillRect(Noisy.X(x), Noisy.Y(y), 1, 1)
    }

    Noisy.check(C)
  },
  check(C) {
    C.val = C.e ? C.val + Noisy.speed : C.val - Noisy.speed

    if (C.val < C.min) {
      C.e = true
      C.max = Math.random() * Noisy.noise
    }
    if (C.val > C.max) {
      C.e = false
      C.min = -Math.random() * Noisy.noise
    }
  },
  update() {
    Noisy.clear()

    for (let i = 0; i < Noisy.circle.length; i++) {
      Noisy.change(Noisy.circle[i])
    }
  },
  draw() {
    Noisy.update()
    window.requestAnimationFrame(Noisy.draw)
  },
  setCircles() {
    for (let i = 0; i < Noisy.circle.length; i++) {
      Noisy.circle[i] = new Noisy.Circle(i)
    }
  },
  setSize() {
    Noisy.c.height = window.innerHeight
    Noisy.c.width = window.innerWidth
  },
  run() {
    Noisy.c = document.getElementById('canvas')
    Noisy.$ = Noisy.c.getContext('2d')
  },
  init() {
    Noisy.run()
    Noisy.setSize()
    Noisy.setCircles()
    Noisy.draw()
  }
}

Noisy.init()

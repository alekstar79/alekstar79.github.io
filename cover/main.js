let HEX_CRAD = 24,
  HEX_BG = '#171717',
  HEX_HL = '#2a2a2a',
  HEX_HLW = 2,
  HEX_GAP = 4,
  NEON_PALETE = [
    '#cb3301', '#ff0066',
    '#ff6666', '#feff99',
    '#ffff67', '#ccff66',
    '#99fe00', '#fe99ff',
    '#ff99cb', '#fe349a',
    '#cc99fe', '#6599ff',
    '#00ccff', '#ffffff'
  ],

  T_SWITCH = 128, // 64

  unit_x = 3 * HEX_CRAD + HEX_GAP * Math.sqrt(3),
  unit_y = HEX_CRAD * Math.sqrt(3) * .5 + .5 * HEX_GAP,
  off_x = 1.5 * HEX_CRAD + HEX_GAP * Math.sqrt(3) * .5,

  /* extract a work palette */
  wp = NEON_PALETE.map(c => {
    const num = parseInt(c.replace('#', ''), 16)

    return {
      'r': num >> 16 & 0xFF,
      'g': num >> 8 & 0xFF,
      'b': num & 0xFF
    }
  }),

  nwp = wp.length,
  csi = 0,

  f = 1 / T_SWITCH,

  c = document.querySelectorAll('canvas'),
  n = c.length,
  w, h, _min,
  ctx = [],
  grid,
  source = null,
  t = 0,
  request_id = null

const GridItem = function(x, y) {
  this.x = x || 0
  this.y = y || 0

  this.points = { hex: [], hl: [] }

  this.init = function() {
    let x, y, a, ba = Math.PI / 3, ri = HEX_CRAD - .5 * HEX_HLW

    for (let i = 0; i < 6; i++) {
      a = i * ba
      x = this.x + HEX_CRAD * Math.cos(a)
      y = this.y + HEX_CRAD * Math.sin(a)

      this.points.hex.push({ x, y })

      if (i > 2) {
        x = this.x + ri * Math.cos(a)
        y = this.y + ri * Math.sin(a)

        this.points.hl.push({ x, y })
      }
    }
  }

  this.draw = function(ct) {
    for (let i = 0; i < 6; i++) {
      ct[(i === 0 ? 'move' : 'line') + 'To'](
        this.points.hex[i].x,
        this.points.hex[i].y
      )
    }
  }

  this.highlight = function(ct) {
    for (let i = 0; i < 3; i++) {
      ct[(i === 0 ? 'move' : 'line') + 'To'](
        this.points.hl[i].x,
        this.points.hl[i].y
      )
    }
  }

  this.init()
}

const Grid = function(rows, cols) {
  this.cols = cols || 16
  this.rows = rows || 16
  this.items = []

  this.n = this.items.length

  this.init = function() {
    let x, y

    for (let row = 0; row < this.rows; row++) {
      y = row * unit_y

      for(let col = 0; col < this.cols; col++) {
        x = ((row % 2 === 0) ? 0 : off_x) + col * unit_x

        this.items.push(new GridItem(x, y))
      }
    }

    this.n = this.items.length
  }

  this.draw = function(ct) {
    ct.fillStyle = HEX_BG
    ct.beginPath()

    for (let i = 0; i < this.n; i++) {
      this.items[i].draw(ct)
    }

    ct.closePath()
    ct.fill()

    ct.strokeStyle = HEX_HL
    ct.beginPath()

    for (let i = 0; i < this.n; i++) {
      this.items[i].highlight(ct)
    }

    ct.closePath()
    ct.stroke()
  }

  this.init()
}

const init = function() {
  let rows, cols, s = getComputedStyle(c[0])

  w = ~~s.width.split('px')[0]
  h = ~~s.height.split('px')[0]
  _min = .5 * Math.min(w, h)

  rows = ~~(h / unit_y) + 2
  cols = ~~(w / unit_x) + 2

  for (let i = 0; i < n; i++) {
    c[i].width = w
    c[i].height = h
    ctx[i] = c[i].getContext('2d')
  }

  grid = new Grid(rows, cols)
  grid.draw(ctx[1])

  if (!source) {
    source = {
      x: ~~(w / 2),
      y: ~~(h / 2)
    }
  }

  neon()
}

const neon = function() {
  let k = (t % T_SWITCH) * f,
    rgb = {
      r: ~~(wp[csi].r * (1 - k) + wp[(csi + 1) % nwp].r * k),
      g: ~~(wp[csi].g * (1 - k) + wp[(csi + 1) % nwp].g * k),
      b: ~~(wp[csi].b * (1 - k) + wp[(csi + 1) % nwp].b * k)
    },

    rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')',
    light = ctx[0].createRadialGradient(
      source.x, source.y, 0,
      source.x, source.y, .8 * _min
    ),

    stp

  stp = .5 - .5 * Math.sin(7 * t * f) * Math.cos(5 * t * f) * Math.sin(3 * t * f)

  light.addColorStop(0, rgb_str)
  light.addColorStop(stp, 'rgba(0,0,0,.03)')

  fillBackground('rgba(0,0,0,.1)')
  fillBackground(light)

  t++

  if (t % T_SWITCH === 0) {
    csi++

    if (csi === nwp) {
      csi = 0
      t = 0
    }
  }

  request_id = requestAnimationFrame(neon)
}

const fillBackground = function(bg_fill) {
  ctx[0].fillStyle = bg_fill
  ctx[0].beginPath()
  ctx[0].rect(0, 0, w, h)
  ctx[0].closePath()
  ctx[0].fill()
}

init()

addEventListener('resize', init, false)

addEventListener('mousemove', e => {
  source = { x: e.clientX, y: e.clientY }
}, false)
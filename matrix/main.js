import { RandomSymbols } from './random-symbols.js'

const c = document.createElement('canvas'),
  $ = c.getContext('2d')

document.body.insertAdjacentElement('afterbegin', c)

let H, W, font = 14, arr = init(), symbols = RandomSymbols.generate()

window.addEventListener('resize', () => {
  arr = init()
})

function init()
{
  H = c.height = innerHeight
  W = c.width = innerWidth

  return RandomSymbols.shuffle(
    Array.from({ length: W / font }, (_, i) => {
      return i * font > H && Math.random() > .98 ? 0 : i
    })
  )
}

setInterval(function()
{
  $.fillStyle = 'rgba(0, 0, 0, .05)'

  $.fillRect(0, 0, W, H)

  $.font = `${font}px monospace`
  $.fillStyle = '#0ee10e'

  for (let i = 0; i < arr.length; i++) {
    let char = symbols[Math.floor(Math.random() * symbols.length)]

    $.fillText(char, i * font, arr[i] * font)

    // if "y" is greater than the height of the canvas, or Math.random() returns more than 0.975
    // then we go up (set "y" to zero)
    if (arr[i] * font > H && Math.random() > .975) {
      arr[i] = 0
    }

    arr[i]++
  }

}, 127)

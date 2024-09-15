const canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d'),

  fillColor = document.querySelector('#fill-color'),
  sizeSlider = document.querySelector('#size-slider'),

  colorButtons = document.querySelectorAll('.colors .option'),
  toolButtons = document.querySelectorAll('.tool'),

  colorPicker = document.querySelector('#color-picker'),
  clearCanvas = document.querySelector('.clear-canvas'),

  saveImg = document.querySelector('.save-img')

// global variables with default value
let prevMouseX,
  prevMouseY,
  snapshot,

  isDrawing = false,
  selectedTool = 'brush',
  selectedColor = "#000",
  brushWidth = 5

const setCanvasBackground = () => {
  // setting whole canvas background to white, so the downloaded img background will be white
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // setting fill style back to the selectedColor, it'll be the brush color
  ctx.fillStyle = selectedColor
}

document.addEventListener('DOMContentLoaded', () => {
  canvas.height = canvas.offsetHeight
  canvas.width = canvas.offsetWidth
  setCanvasBackground()
})

const drawRect = (e) => {
  // if fillColor isn't checked draw a rect with border else draw rect with background
  if (!fillColor.checked) {
    // creating circle according to the mouse pointer
    return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY)
  }

  ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY)
}

const drawCircle = (e) => {
  ctx.beginPath()

  // getting radius for circle according to the mouse pointer
  let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))

  // creating circle according to the mouse pointer
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI)

  // if fillColor is checked fill circle else draw border circle
  fillColor.checked ? ctx.fill() : ctx.stroke()
}

const drawTriangle = (e) => {
  ctx.beginPath()

  ctx.moveTo(prevMouseX, prevMouseY) // moving triangle to the mouse pointer
  ctx.lineTo(e.offsetX, e.offsetY) // creating first line according to the mouse pointer
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY) // creating bottom line of triangle
  ctx.closePath() // closing path of a triangle so the third line draw automatically

  // if fillColor is checked fill triangle else draw border
  fillColor.checked ? ctx.fill() : ctx.stroke()
}

const startDraw = (e) => {
  isDrawing = true

  prevMouseX = e.offsetX // passing current mouseX position as prevMouseX value
  prevMouseY = e.offsetY // passing current mouseY position as prevMouseY value

  ctx.beginPath()

  ctx.lineWidth = brushWidth // passing brushSize as line width
  ctx.strokeStyle = selectedColor // passing selectedColor as stroke style
  ctx.fillStyle = selectedColor // passing selectedColor as fill style

  // copying canvas data & passing as snapshot value... this avoids dragging the image
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
}

const drawing = (e) => {
  if (!isDrawing) return

  // adding copied canvas data on to this canvas
  ctx.putImageData(snapshot, 0, 0)

  if (selectedTool === 'brush' || selectedTool === 'eraser') {
    // if selected tool is eraser then set strokeStyle to white
    // to paint white color on to the existing canvas content else set the stroke color to selected color
    ctx.strokeStyle = selectedTool === 'eraser' ? "#fff" : selectedColor

    // creating line according to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke() // drawing/filling line with color
  } else if(selectedTool === 'rectangle') {
    drawRect(e)
  } else if(selectedTool === 'circle') {
    drawCircle(e)
  } else {
    drawTriangle(e)
  }
}

toolButtons.forEach(btn => {
  // adding click event to all tool option
  btn.addEventListener('click', () => {
    // removing active class from the previous option and adding on current clicked option
    document.querySelector(".options .active").classList.remove('active')
    btn.classList.add('active')

    selectedTool = btn.id
  })
})

// passing slider value as brushSize
sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value)

colorButtons.forEach(btn => {
  // adding click event to all color button
  btn.addEventListener('click', () => {
    // removing selected class from the previous option and adding on current clicked option
    document.querySelector('.options .selected').classList.remove('selected')
    btn.classList.add('selected')

    // passing selected btn background color as selectedColor value
    selectedColor = window
      .getComputedStyle(btn)
      .getPropertyValue('background-color')
  })
})

colorPicker.addEventListener('change', () => {
  // passing picked color value from color picker to last color btn background
  colorPicker.parentElement.style.background = colorPicker.value
  colorPicker.parentElement.click()
})

clearCanvas.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  setCanvasBackground()
})

saveImg.addEventListener('click', () => {
  const link = document.createElement('a')

  link.download = `${Date.now()}.jpg`
  link.href = canvas.toDataURL()

  link.click()
})

canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mousedown", startDraw)
canvas.addEventListener("mousemove", drawing)

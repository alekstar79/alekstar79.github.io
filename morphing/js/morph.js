import { imageToGrid, deepMerge, generateRandomPointAround, inNeighbourhood } from './utils.js'
import { Point } from './point.js'

const defaultSettings = {
  imgWidth: 640,
  imgHeight: 500,

  img1: null,
  img2: null,

  className: 'morph-canvas',

  canvasStyle: {
    cursor: 'pointer'
  }
}

export function useMorph(container = document.body, settings = null) {
  settings = deepMerge(settings ?? {}, defaultSettings, (key, a, b) => {
    return key === 'canvasStyle' ? Object.assign({}, a, b) : a ?? b
  })

  if (!settings.img1 || !settings.img2) return

  const imgWidth = settings.imgWidth
  const imgHeight = settings.imgHeight
  const increment = .005
  const radius = 3

  let distribution1
  let distribution2

  let length
  let from
  let to

  let processingPoints
  let morphing = false

  let ratio = 64
  let maxRadius = 0
  let minRadius = 100

  let ctxCircles
  let circlesImgData
  let circlesData

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { alpha: true })
  container.appendChild(canvas)
  canvas.width = imgWidth
  canvas.height = imgHeight
  canvas.className = settings.className

  Object.assign(canvas.style, settings.canvasStyle)

  const canvasImg = document.createElement('canvas')
  const ctxImg = canvasImg.getContext('2d', { alpha: true })
  container.appendChild(canvasImg)
  canvasImg.style.display = 'none'
  canvasImg.width = imgWidth
  canvasImg.height = imgHeight

  const canvasCircles = document.createElement('canvas')
  canvasCircles.style.display = 'none'

  const image1 = new Image()
  image1.crossOrigin = 'anonymous'
  const image2 = new Image()
  image2.crossOrigin = 'anonymous'

  let imageData

  const Poisson = (() => {
    let width, height, cellSize, grid

    function distribute(count, radius, w, h, imgData)
    {
      width = w
      height = h
      imageData = imgData

      cellSize = radius / Math.sqrt(2)
      grid = buildGrid(Math.ceil(w / cellSize), Math.ceil(h / cellSize))
      count = Math.min(count, Math.floor(w / cellSize) * Math.floor(h / cellSize))

      const processList = []
      const firstPoint = new Point(w * .5, h * .5)

      processList.push(firstPoint)

      setGridPoint(imageToGrid(firstPoint, cellSize), firstPoint)

      const result = []

      while (result.length < count) {
        let added = false
        let rid = ~~(Math.random() * processList.length)
        let point = processList[rid]

        for (let i= 0; i < 20; i++) {
          const newPoint = generateRandomPointAround(point, radius)

          // check that the point is in the image region
          // and no points exists in the point's neighbourhood

          const offset = ~~newPoint.x * 4 + ~~newPoint.y * 4 * width

          // skip white
          if (
            imageData.data[offset] === 0xff &&
            imageData.data[offset + 1] === 0xff &&
            imageData.data[offset + 2] === 0xff
          ) {
            continue
          }

          if (inRectangle(newPoint) && !inNeighbourhood(grid, newPoint, radius, cellSize)) {
            processList.push(newPoint)

            newPoint.color = ((imageData.data[offset]) << 16) | ((imageData.data[offset + 1]) << 8) | (imageData.data[offset + 2])
            newPoint.red = imageData.data[offset]
            newPoint.green = imageData.data[offset + 1]
            newPoint.blue = imageData.data[offset + 2]

            const red = imageData.data[offset]
            const green = imageData.data[offset + 1]
            const blue = imageData.data[offset + 2]
            const mean = (red + green + blue) / 3
            const intensity = 1 - mean / 255

            newPoint.id = count - result.length
            newPoint.radius = ((newPoint.id * 2 / (count) + intensity) / 4) * radius * 1.2
            result.push(newPoint)
            setGridPoint(imageToGrid(newPoint, cellSize), newPoint)
            added = true

            maxRadius = Math.max(maxRadius, newPoint.radius)
            minRadius = Math.min(minRadius, newPoint.radius)
          }
        }
      }

      return result
    }

    function buildGrid(w, h)
    {
      const g = []

      for(let i = 0; i < w; i++) {
        const tmp = []

        for (let j = 0; j < h; j++) {
          tmp.push(null)
        }

        g.push(tmp)
      }

      return g
    }

    function setGridPoint(gridPoint, value)
    {
      if (grid[gridPoint.x][gridPoint.y] === null) {
        grid[gridPoint.x][gridPoint.y] = value
      }
    }

    function inRectangle(point)
    {
      return point.x > 0 && point.x < width && point.y > 0 && point.y < height
    }

    return { distribute }
  })()

  const update = () => {
    if (!distribution1) return

    const nbPointsToDraw = Math.min(from.length, to.length)
    ratio = Math.max(1.5, ratio * .9)

    const imageData = ctx.createImageData(imgWidth, imgHeight)
    const pixelsData = imageData.data

    for (let i= 0; i < imgWidth * imgHeight * 4; i++) {
      pixelsData[i] = 0xff
    }

    const canvasCirclesWidth = canvasCircles.width

    let indexX, indexY

    ctx.strokeStyle = '#000000'
    ctx.lineCap = 'round'

    for (let i = 0; i < nbPointsToDraw; i++) {
      let pRed = from[i].red
      let pGreen = from[i].green
      let pBlue = from[i].blue
      let pToRed = to[i].red
      let pToGreen = to[i].green
      let pToBlue = to[i].blue

      let pX = from[i].x
      let pY = from[i].y
      let pToX = to[i].x
      let pToY = to[i].y

      let pRadius = from[i].radius
      let pToRadius = to[i].radius

      let roundedRadius
      let idxCircle
      let idx

      pRed += (pToRed - pRed) / ratio
      pGreen += (pToGreen - pGreen) / ratio
      pBlue += (pToBlue - pBlue) / ratio

      pX += (pToX - pX) / ratio
      pY += (pToY - pY) / ratio

      pRadius += (pToRadius - pRadius) / ratio

      // transition ended for this point, removing it from list
      if (
        (pToX - pX) <= .005 &&
        (pToY - pY) <= .005 &&
        (pToRed - pRed) <= .005 &&
        (pToGreen - pGreen) <= .005 &&
        (pToBlue - pBlue) <= .005 &&
        (pToRadius - pRadius) <= .005
      ) {
        processingPoints--
      }

      const color = (pRed << 16) | (pGreen << 8) | pBlue

      let tRadius = 0
      while (tRadius < pRadius) {
        tRadius += increment
      }

      idx = (~~(pX-pRadius)) * 4 + (~~(pY-pRadius)) * 4 * imgWidth

      let offset = maxRadius * 2 * ((tRadius-increment) / increment)

      offset = ~~(offset + .5)
      roundedRadius = ~~(pRadius)
      roundedRadius = Math.max(roundedRadius, 1)
      idxCircle = offset * 4

      for (indexX = 0; indexX < roundedRadius * 8 + 4; indexX += 4) {
        for (indexY = 0; indexY < roundedRadius * 8 + 4; indexY += 4) {
          if (circlesData[idxCircle + indexX + indexY * canvasCirclesWidth] < 64) {
            pixelsData[idx + indexX + indexY * imgWidth] = ~~pRed
            pixelsData[idx + indexX + indexY * imgWidth + 1] = ~~pGreen
            pixelsData[idx + indexX + indexY * imgWidth + 2] = ~~pBlue
            pixelsData[idx + indexX + indexY * imgWidth + 3] = 255
          }
          else if (circlesData[idxCircle + indexX + indexY * canvasCirclesWidth] <= 90) {
            pixelsData[idx + indexX + indexY * imgWidth] =  ~~((5 * pRed + pixelsData[idx + indexX + indexY * imgWidth ]) / 6)
            pixelsData[idx + indexX + indexY * imgWidth + 1] =  ~~((5 * pGreen + pixelsData[idx + indexX + indexY * imgWidth + 1]) / 6)
            pixelsData[idx + indexX + indexY * imgWidth + 2] = ~~((5 * pBlue + pixelsData[idx + indexX + indexY * imgWidth + 2]) / 6)
            pixelsData[idx + indexX + indexY * imgWidth + 3] = 255
          }
          else if (circlesData[idxCircle + indexX + indexY * canvasCirclesWidth] <= 128) {
            pixelsData[idx + indexX + indexY * imgWidth] =  ~~((3 * pRed + pixelsData[idx + indexX + indexY * imgWidth ]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 1] =  ~~((3 * pGreen + pixelsData[idx + indexX + indexY * imgWidth + 1]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 2] = ~~((3 * pBlue + pixelsData[idx + indexX + indexY * imgWidth + 2]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 3] = 255
          }
          else if (circlesData[idxCircle + indexX + indexY * canvasCirclesWidth] <= 200) {
            pixelsData[idx + indexX + indexY * imgWidth] =  ~~((pRed + pixelsData[idx + indexX + indexY * imgWidth]) / 2)
            pixelsData[idx + indexX + indexY * imgWidth + 1] =  ~~((pGreen + pixelsData[idx + indexX + indexY * imgWidth + 1]) / 2)
            pixelsData[idx + indexX + indexY * imgWidth + 2] = ~~((pBlue + pixelsData[idx + indexX + indexY * imgWidth + 2]) / 2)
            pixelsData[idx + indexX + indexY * imgWidth + 3] = 255
          }
          else if (circlesData[idxCircle + indexX + indexY * canvasCirclesWidth] <= 240) {
            pixelsData[idx + indexX + indexY * imgWidth] =  ~~((pRed + 3 * pixelsData[idx + indexX + indexY * imgWidth]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 1] =  ~~((pGreen + 3 * pixelsData[idx + indexX + indexY * imgWidth + 1]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 2] = ~~((pBlue + 3 * pixelsData[idx + indexX + indexY * imgWidth + 2]) / 4)
            pixelsData[idx + indexX + indexY * imgWidth + 3] = 255
          }
        }
      }

      from[i] = new Point(pX, pY, color, pRadius, from[i].id)
    }

    ctx.putImageData(imageData, 0, 0)

    if (processingPoints > 0) {
      requestAnimationFrame(update)
    } else {
      morphing = false
    }
  }

  const draw = () => {
    if (!distribution1) return

    for (let i = 0; i < length; i++) {
      if (distribution1.length === 0) return

      const p = distribution1[i]

      ctx.fillStyle = `#${Number(p.color).toString(16).padStart(6, '0')}`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const morph = () => {
    if (morphing) return

    morphing = true

    let p
    if (to === undefined || to === distribution1) {
      from = []

      for (let i = 0; i < distribution1.length; i++) {
        p = distribution1[i]
        from.push(new Point(p.x, p.y, p.color, p.radius, p.id))
      }

      to = distribution2
    } else {
      from = []

      for (let i = 0; i < distribution2.length; i++) {
        p = distribution2[i]
        from.push(new Point(p.x, p.y, p.color, p.radius, p.id))
      }

      to = distribution1
    }

    ratio = 64
    processingPoints = Math.min(from.length, to.length)

    update()
  }

  const drawCircles = () => {
    let radius = increment
    let offset = 0

    maxRadius = ~~(maxRadius + .5) + 1

    container.appendChild(canvasCircles)
    canvasCircles.width = maxRadius * 2 *  maxRadius / increment
    canvasCircles.height = maxRadius * 2
    ctxCircles = canvasCircles.getContext('2d')

    ctxCircles.fillStyle = '#ffffff'
    ctxCircles.fillRect(0, 0, canvasCircles.width, canvasCircles.height)

    ctxCircles.fillStyle = '#000000'
    while (radius <= maxRadius) {
      ctxCircles.beginPath()
      ctxCircles.arc(offset + radius, radius, radius, 0, Math.PI * 2)
      ctxCircles.fill()

      offset += maxRadius * 2
      radius += increment
    }

    circlesImgData = ctxCircles.getImageData(0, 0, canvasCircles.width, canvasCircles.height)
    circlesData = circlesImgData.data
  }

  image1.onload = () => {
    ctxImg.drawImage(image1, 0, 0)
    imageData = ctxImg.getImageData(0, 0, imgWidth, imgHeight)
    distribution1 = Poisson.distribute(12000, radius, imgWidth, imgHeight, imageData)
    length = distribution1.length
    draw()

    image2.src = settings.img2
  }

  image2.onload = () => {
    ctxImg.drawImage(image2, 0, 0)
    imageData = ctxImg.getImageData(0, 0, imgWidth, imgHeight)
    distribution2 = Poisson.distribute(12000, radius, imgWidth, imgHeight, imageData)
    drawCircles()
  }

  image1.src = settings.img1

  canvas.addEventListener('click', morph)
}

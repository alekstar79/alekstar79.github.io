// Formula for calculating relative luminance
const calcLuminance = (r, g, b) => (r * 299 + g * 587 + b * 114) / 1000

export class MorphRenderer
{
  constructor(canvas, width, height,  backgroundColor = '#ffffff')
  {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d', { alpha: backgroundColor === 'transparent' })
    this.width = width
    this.height = height
    this.backgroundColor = backgroundColor

    this.canvas.width = width
    this.canvas.height = height

    // Set a transparent background if necessary
    if (backgroundColor === 'transparent') {
      this.clear()
    }
  }

  clear()
  {
    if (this.backgroundColor === 'transparent') {
      this.ctx.clearRect(0, 0, this.width, this.height)
    } else {
      this.ctx.fillStyle = this.backgroundColor
      this.ctx.fillRect(0, 0, this.width, this.height)
    }
  }

  drawPoints(points)
  {
    points.forEach(point => {
      this.ctx.fillStyle = `rgb(${point.red}, ${point.green}, ${point.blue})`
      this.ctx.beginPath()
      this.ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
      this.ctx.fill()
    })
  }

  renderMorphFrame(fromPoints, toPoints, ratio, circleTexture, progress = 0)
  {
    this.clear()

    // Create a temporary canvas for morphing
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d', { alpha: this.backgroundColor === 'transparent' })

    tempCanvas.width = this.width
    tempCanvas.height = this.height

    // Clearing the temporary canvas, taking the background into account
    if (this.backgroundColor === 'transparent') {
      tempCtx.clearRect(0, 0, this.width, this.height)
    } else {
      tempCtx.fillStyle = this.backgroundColor
      tempCtx.fillRect(0, 0, this.width, this.height)
    }

    const imageData = tempCtx.createImageData(this.width, this.height)
    const pixels = imageData.data

    // Filling pixels depending on the background
    if (this.backgroundColor === 'transparent') {
      // For a transparent background, set all alpha channels to 0
      for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 0      // R
        pixels[i + 1] = 0  // G
        pixels[i + 2] = 0  // B
        pixels[i + 3] = 0  // A - полностью прозрачный
      }
    } else {
      // For a colored background, fill with white
      for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255
        pixels[i + 1] = 255
        pixels[i + 2] = 255
        pixels[i + 3] = 255
      }
    }

    const nbPoints = Math.min(fromPoints.length, toPoints.length)

    for (let i = 0; i < nbPoints; i++) {
      const from = fromPoints[i]
      const to = toPoints[i]

      const interpolated = from.interpolateTo(to, ratio)

      this.renderCircle(pixels, interpolated, circleTexture)

      fromPoints[i] = interpolated
    }

    // Place imageData on a temporary canvas
    tempCtx.putImageData(imageData, 0, 0)

    // Copy the temporary canvas to the main one
    this.ctx.drawImage(tempCanvas, 0, 0)

    // Draw a progress indicator on top of everything (after putImageData)
    if (progress > 0) {
      this.drawProgressIndicator(progress)
    }
  }

  renderCircle(pixels, point, circleTexture)
  {
    const roundedRadius = Math.max(Math.floor(point.radius), 1)
    const centerX = Math.floor(point.x)
    const centerY = Math.floor(point.y)

    const sectionSize = Math.ceil(circleTexture.canvas.height)
    const sectionIndex = Math.floor(point.radius / 0.005)
    const textureOffsetX = sectionIndex * sectionSize

    for (let dy = -roundedRadius; dy <= roundedRadius; dy++) {
      for (let dx = -roundedRadius; dx <= roundedRadius; dx++) {
        const pixelX = centerX + dx
        const pixelY = centerY + dy

        if (pixelX < 0 || pixelX >= this.width || pixelY < 0 || pixelY >= this.height) continue

        const textureX = textureOffsetX + dx + roundedRadius
        const textureY = dy + roundedRadius
        const textureAlpha = circleTexture.getPixel(textureX, textureY)
        const pixelOffset = (pixelY * this.width + pixelX) * 4

        if (textureAlpha < 64) {
          // Fully opaque circle pixel
          pixels[pixelOffset] = point.red
          pixels[pixelOffset + 1] = point.green
          pixels[pixelOffset + 2] = point.blue
          pixels[pixelOffset + 3] = 255
        } else if (textureAlpha <= 90) {
          // Partially transparent edge
          const alpha = (90 - textureAlpha) / 26 // Нормализуем от 0 до 1
          pixels[pixelOffset] = Math.floor(point.red * alpha + pixels[pixelOffset] * (1 - alpha))
          pixels[pixelOffset + 1] = Math.floor(point.green * alpha + pixels[pixelOffset + 1] * (1 - alpha))
          pixels[pixelOffset + 2] = Math.floor(point.blue * alpha + pixels[pixelOffset + 2] * (1 - alpha))
          pixels[pixelOffset + 3] = Math.max(pixels[pixelOffset + 3], Math.floor(255 * alpha))
        } else if (textureAlpha <= 128) {
          // More transparent edge
          const alpha = (128 - textureAlpha) / 38
          pixels[pixelOffset] = Math.floor(point.red * alpha + pixels[pixelOffset] * (1 - alpha))
          pixels[pixelOffset + 1] = Math.floor(point.green * alpha + pixels[pixelOffset + 1] * (1 - alpha))
          pixels[pixelOffset + 2] = Math.floor(point.blue * alpha + pixels[pixelOffset + 2] * (1 - alpha))
          pixels[pixelOffset + 3] = Math.max(pixels[pixelOffset + 3], Math.floor(255 * alpha))
        }
        // For alpha values > 128, leave the background as is (transparent or colored)
      }
    }
  }

  drawProgressIndicator(progress)
  {
    const width = this.width * 0.5
    const height = 20

    const x = (this.width - width) / 2
    const y = this.height - 25
    const k = 1

    // Determine the optimal text color based on the canvas background
    const isLightBackground = this.backgroundColor === 'transparent' ? true : this.isColorLight(this.backgroundColor)
    const baseTextColor = isLightBackground ? '#000000' : '#ffffff'

    // Progress bar background (semi-transparent to allow the underlay to be visible)
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
    this.ctx.fillRect(x, y, width, height)

    // The filled part is contrasting with the base color of the text
    this.ctx.fillStyle = baseTextColor === '#000000' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)'
    this.ctx.fillRect(x, y, width * progress, height)

    // Using text outlines for maximum readability
    const text = `${Math.round(progress * 100)}%`
    const textY = y + k + height / 2
    const textX = this.width / 2

    // Text outline (inverse of base color)
    this.ctx.strokeStyle = baseTextColor === '#000000' ? 'white' : 'black'
    this.ctx.lineWidth = 3
    this.ctx.lineJoin = 'round'
    this.ctx.strokeText(text, textX, textY)

    // Main text
    this.ctx.fillStyle = baseTextColor
    this.ctx.font = 'bold 14px Arial'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText(text, textX, textY)
  }

  // A helper's method for determining color brightness
  isColorLight(color)
  {
    // Simplified check for primary colors
    if (color === 'transparent') return true
    if (color === '#ffffff' || color === 'white') return true
    if (color === '#000000' || color === 'black') return false

    // For hex colors
    if (color.startsWith('#')) {
      const hex = color.replace('#', '')
      const r = hex.substring(0, 2)
      const g = hex.substring(2, 4)
      const b = hex.substring(4, 6)
      const brightness = calcLuminance(r, g, b,)

      return brightness > 128
    }

    // For RGB colors
    if (color.startsWith('rgb')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)

      if (match) {
        const r = parseInt(match[1])
        const g = parseInt(match[2])
        const b = parseInt(match[3])
        const brightness = calcLuminance(r, g, b,)

        return brightness > 128
      }
    }

    return true
  }
}

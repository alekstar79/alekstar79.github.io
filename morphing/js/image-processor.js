/**
* @class
* @name ImageProcessor
* @property {HTMLCanvasElement} canvas
* @property {CanvasRenderingContext2D} ctx
* @property {number} width
* @property {number} height
*/
export class ImageProcessor
{
  constructor(width, height)
  {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })

    this.height = height
    this.width = width

    this.canvas.style.display = 'none'
    this.canvas.height = height
    this.canvas.width = width
  }

  /**
   * @param {string} src
   * @returns {Promise<ImageData>}
   */
  loadImage(src)
  {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.crossOrigin = 'anonymous'
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.drawImage(img, 0, 0, this.width, this.height)
        resolve(this.ctx.getImageData(0, 0, this.width, this.height))
      }

      img.onerror = reject
      img.src = src
    })
  }
}

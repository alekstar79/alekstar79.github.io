export class Canvas
{
  static instance

  static init(key)
  {
    Canvas.instance || (Canvas.instance = new Canvas())

    return key ? Canvas.instance[key] : Canvas.instance
  }

  constructor()
  {
    if (Canvas.instance instanceof Canvas) return Canvas.instance

    const cnv = document.createElement('canvas')
    const ctx = cnv.getContext('2d')

    this.width  = 0
    this.height = 0

    this.cnv = cnv
    this.ctx = ctx

    document.body.appendChild(cnv)
    window.addEventListener(
      'resize',
      this.resize.bind(this),
      false
    )

    Canvas.instance = this
  }

  resize()
  {
    let cnv = this.cnv

    const w = this.cnv.offsetWidth
    const h = this.cnv.offsetHeight

    if (w !== this.width || h !== this.height) {
      for (this.left = 0, this.top = 0; !!cnv; cnv = cnv.offsetParent) {
        this.left += cnv.offsetLeft
        this.top  += cnv.offsetTop
      }

      this.width  = this.cnv.width  = w
      this.height = this.cnv.height = h

      this.centerX = w / 2
      this.centerY = h / 2

      this.resize()
    }
  }
}

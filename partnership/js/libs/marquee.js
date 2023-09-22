export class Marquee
{
  static init = (el, options) => new Marquee(el, options)

  constructor(el, options = {})
  {
    Object.assign(this, {
      marqueeElem: null,
      elemWidth: null,
      process: null,

      milestone: 0,
      ltrCond: 0,
      loopCnt: 0,
      start: 0,

      textcolor: '#000000',
      bgcolor: '#ffffff',
      continuous: true,
      direction: 'ltr',
      opacity: 1.0,
      loops: -1,
      speed: 1

    }, options)

    this.build(el)
  }

  build(el)
  {
    let elemHTML = el.innerHTML
    let elemNode = el.childNodes[1] || el

    this.elemWidth = elemNode.offsetWidth
    this.marqueeElem = '<div>' + elemHTML + '</div>'

    el.innerHTML = this.marqueeElem
    this.marqueeElem = el.getElementsByTagName('div')[0]
    el.style.overflow = 'hidden'

    Object.assign(this.marqueeElem.style, {
      whiteSpace: 'nowrap',
      position: 'relative',
      backgroundColor: this.bgcolor,
      color: this.textcolor,
      opacity: this.opacity
    })

    if (this.continuous) {
      this.marqueeElem.innerHTML += elemHTML
      this.marqueeElem.style.width = '200%'

      if (this.direction === 'ltr') {
        this.start = -this.elemWidth
      }
    } else {
      this.ltrCond = el.offsetWidth

      if (this.direction === 'rtl') {
        this.milestone = this.ltrCond
      }
    }
    if (this.direction === 'ltr') {
      this.milestone = -this.elemWidth
    } else if (this.direction === 'rtl') {
      this.speed = -this.speed
    }

    this.play()
  }

  play()
  {
    this.process = setInterval(this.perform.bind(this), 16)
  }

  perform()
  {
    this.marqueeElem.style.left = this.start + 'px'
    this.start += this.speed

    if (this.start > this.ltrCond || this.start < -this.elemWidth) {
      this.start = this.milestone
      this.loopCnt++

      if (this.loops !== -1 && this.loopCnt >= this.loops) {
        this.marqueeElem.style.left = '0'
      }
    }
  }

  end()
  {
    clearInterval(this.process)
  }
}

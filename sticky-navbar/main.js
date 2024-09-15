/** @scrollto https://gist.github.com/felipenmoura/650e7e1292c1e7638bcf6c9f9aeb9dd5 */

const easingEquations = {
  easeOutSine: p => Math.sin(p * Math.PI / 2),
  easeInOutSine: p => -.5 * (Math.cos(Math.PI * p) - 1),
  easeInOutQuint: p => (p /= .5) < 1 ? .5 * Math.pow(p, 5) : .5 * (Math.pow((p - 2), 5) + 2)
}

const height = el => el.getBoundingClientRect().height

function offsetY(el)
{
  const { top } = el.getBoundingClientRect()
  const doc = document.documentElement

  return top + window.scrollY - doc.clientTop
}

function offsetX(el)
{
  const { left } = el.getBoundingClientRect()
  const doc = document.documentElement

  return left + window.scrollX - doc.clientLeft
}

function simpleScrollToY(pos, speed = 800)
{
  let progress, currentPos, start = 0

  window.requestAnimationFrame(function tick(currentTime) {
    start = !start ? currentTime : start

    progress = currentTime - start
    currentPos = window.scrollY

    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress / speed) + currentPos)
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress / speed))
    }
    if (progress < speed) {
      window.requestAnimationFrame(tick)
    } else {
      window.scrollTo(0, pos)
    }
  })
}

function easingScrollToY(pos, speed = 800, easing = 'easeOutSine')
{
  let scrollY = window.scrollY, currentTime = 0
  let time = Math.max(.1, Math.min(Math.abs(scrollY - pos) / speed, .8))

  window.requestAnimationFrame(function tick() {
    currentTime += 1 / 60

    let p = currentTime / time
    let t = easingEquations[easing](p)

    if (p < 1) {
      window.scrollTo(0, scrollY + ((pos - scrollY) * t))
      window.requestAnimationFrame(tick)
    } else {
      window.scrollTo(0, pos)
    }
  })
}

function debounce(fn, ms = 400)
{
  let timeout

  return function(...args) {
    timeout && clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, ms)
  }
}

class Navigation
{
  constructor()
  {
    this.onTabClick = this.onTabClick.bind(this)
    this.onResize = debounce(this.onResize)

    this.tabContainerHeight = 70
    this.lastScroll = 0

    this.currentId = null
    this.currentTab = null

    document.querySelector('.nav-container')
      .addEventListener('click', this.onTabClick)

    window.addEventListener('scroll', () => {
      this.onScroll()
    })

    window.addEventListener('resize', () => {
      this.onResize()
    })
  }

  onTabClick(e)
  {
    const section = document.querySelector(e.target.getAttribute('href'))
    const scrollTop = offsetY(section) - this.tabContainerHeight + 1

    easingScrollToY(scrollTop)

    e.preventDefault()
  }

  onScroll()
  {
    this.checkHeaderPosition()
    this.findCurrentTabSelector()

    this.lastScroll = window.scrollY
  }

  onResize()
  {
    this.currentId && this.setSliderCss()
  }

  checkHeaderPosition()
  {
    const container = document.querySelector('.nav-container')
    const nav = document.querySelector('.nav')
    const headerHeight = 75

    container.classList[window.scrollY > headerHeight ? 'add' : 'remove']('nav-container--scrolled')

    const offset = offsetY(nav) + height(nav) - this.tabContainerHeight - headerHeight

    if (window.scrollY > this.lastScroll && window.scrollY > offset) {
      container.classList.add('nav-container--move-up')
      container.classList.remove('nav-container--top-first')
      container.classList.add('nav-container--top-second')
    } else if (window.scrollY < this.lastScroll && window.scrollY > offset) {
      container.classList.remove('nav-container--move-up')
      container.classList.remove('nav-container--top-second')
      container.classList.add('nav-container--top-first')
    } else {
      container.classList.remove('nav-container--move-up')
      container.classList.remove('nav-container--top-first')
      container.classList.remove('nav-container--top-second')
    }
  }

  findCurrentTabSelector()
  {
    let newCurrentId, newCurrentTab

    document.querySelectorAll('.nav-tab')
      .forEach(tab => {
        let id = tab.getAttribute('href')
        let section = document.querySelector(id)

        let offsetTop = offsetY(section) - this.tabContainerHeight
        let offsetBottom = offsetY(section) + height(section) - this.tabContainerHeight

        if (
          window.scrollY > offsetTop &&
          window.scrollY < offsetBottom
        ) {
          newCurrentId = id
          newCurrentTab = tab
        }
      })

    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId
      this.currentTab = newCurrentTab
      this.setSliderCss()
    }
  }

  setSliderCss()
  {
    const slider = document.querySelector('.nav-tab-slider')

    let width = 0, left = 0

    if (this.currentTab) {
      width = parseFloat(window.getComputedStyle(this.currentTab).width)
      left = offsetX(this.currentTab)
    }

    Object.assign(slider.style, {
      width: `${width}px`,
      left: `${left}px`
    })
  }
}

new Navigation()

Particles.init({
  selector: '.background',
  color: ['#03dac6', '#ff0266', '#000000'],
  connectParticles: true,
  responsive: [{
    breakpoint: 768,
    options: {
      color: ['#faebd7', '#03dac6', '#ff0266'],
      maxParticles: 43,
      connectParticles: false
    }
  }]
})

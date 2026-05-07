const getVisibleCount = (state) => {
  if (state.name === 'stages') return 1

  if (window.matchMedia('(min-width: 1025px)').matches) return 3
  if (window.matchMedia('(min-width: 600px)').matches) return 2

  return 1
}

const isCarouselActive = (state) =>
  state.name !== 'stages' || !window.matchMedia('(min-width: 1200px)').matches

const getGap = (list) => {
  const styles = window.getComputedStyle(list)
  return Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
}

const getStep = (state) => {
  const firstSlide = state.list.children.item(0)
  return firstSlide ? firstSlide.getBoundingClientRect().width + getGap(state.list) : 0
}

const updateIndicators = (state) => {
  const total = state.originals.length
  const visible = state.name === 'participants' ? state.visibleCount : 1
  const shownNumber = ((state.logicalIndex + visible - 1) % total) + 1

  state.dots.forEach((dot, index) => {
    const isActive = index === state.logicalIndex

    dot.classList.toggle('dot--active', isActive)
    dot.setAttribute('aria-selected', String(isActive))
  })

  state.pageLabels.forEach((label) => (label.textContent = String(shownNumber)))
  state.totalLabels.forEach((label) => (label.textContent = String(total)))
}

const applyTransform = (state, animate) => {
  if (!state.active) {
    state.list.style.transition = ''
    state.list.style.transform = ''
    updateIndicators(state)
    return
  }

  state.list.style.transition = animate ? 'transform 0.35s ease' : 'none'
  state.list.style.transform = `translateX(-${state.trackIndex * getStep(state)}px)`

  updateIndicators(state)
}

const renderCarouselTrack = (state) => {
  state.active = isCarouselActive(state)
  state.visibleCount = getVisibleCount(state)
  state.list.replaceChildren()
  state.originals.forEach((slide) => state.list.append(slide))
  state.logicalIndex = 0
  state.trackIndex = 0

  applyTransform(state, false)
}

const moveCarousel = (state, direction) => {
  if (!state.active) return

  const total = state.originals.length
  state.logicalIndex = (state.logicalIndex + direction + total) % total
  state.trackIndex = state.logicalIndex

  applyTransform(state, true)
}

const bindCarousel = (root) => {
  const list = root.querySelector('.stages__list, .participants__list')
  if (!list) return

  const state = {
    root,
    list,
    originals: Array.from(root.querySelectorAll('[data-slide]')),
    prevButtons: Array.from(root.querySelectorAll('[data-prev]')),
    nextButtons: Array.from(root.querySelectorAll('[data-next]')),
    dots: Array.from(root.querySelectorAll('[data-dot]')),
    pageLabels: Array.from(root.querySelectorAll('[data-page]')),
    totalLabels: Array.from(root.querySelectorAll('[data-total]')),
    name: root.dataset.carousel,
    logicalIndex: 0,
    trackIndex: 0,
    visibleCount: 1,
    active: true
  }

  state.prevButtons.forEach((btn) => btn.addEventListener('click', () => moveCarousel(state, -1)))
  state.nextButtons.forEach((btn) => btn.addEventListener('click', () => moveCarousel(state, 1)))
  state.dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (!state.active) return

      state.logicalIndex = index
      state.trackIndex = index

      applyTransform(state, true)
    })
  })

  let previousActive = false
  let previousVisible = 0

  const refresh = () => {
    const nextActive = isCarouselActive(state)
    const nextVisible = getVisibleCount(state)

    if (nextActive !== previousActive || nextVisible !== previousVisible) {
      previousActive = nextActive
      previousVisible = nextVisible
      renderCarouselTrack(state)
    } else {
      applyTransform(state, false)
    }
  }

  window.addEventListener('resize', refresh)

  refresh()
}

const setupInfiniteCarousel = (root) => {
  const list = root.querySelector('.participants__list')
  const viewport = root.querySelector('.participants__viewport')
  const slides = [...list.querySelectorAll('.participant')]
  const prevBtns = root.querySelectorAll('[data-prev]')
  const nextBtns = root.querySelectorAll('[data-next]')
  const pageSpan = root.querySelector('[data-page]')
  const totalSpan = root.querySelector('[data-total]')

  let visibleCount = getVisibleCount({ name: 'participants' })
  let step = 0
  let currentIndex = visibleCount
  let allSlides = []
  let autoplayTimer = null
  let isMoving = false
  let pausedByHover = false

  if (!list || !viewport) return

  const updateTransform = (animate) => {
    list.style.transition = animate ? 'transform 0.35s ease' : 'none'
    list.style.transform = `translateX(-${currentIndex * step}px)`
  }

  const updatePage = () => {
    if (!pageSpan) return
    const realIndex = ((currentIndex - visibleCount) + slides.length) % slides.length
    pageSpan.textContent = realIndex + 1
  }

  const moveSafe = async (dir) => {
    if (isMoving) return
    isMoving = true

    stopAutoplay()

    currentIndex += dir
    updateTransform(true)

    await new Promise(resolve => {
      const onEnd = () => {
        list.removeEventListener('transitionend', onEnd)
        clearTimeout(fallback)
        resolve()
      }
      const fallback = setTimeout(onEnd, 400)
      list.addEventListener('transitionend', onEnd, { once: true })
    })

    if (currentIndex < visibleCount) {
      currentIndex += slides.length
      updateTransform(false)
    } else if (currentIndex >= slides.length + visibleCount) {
      currentIndex -= slides.length
      updateTransform(false)
    }
    updatePage()

    isMoving = false

    if (!pausedByHover && document.visibilityState === 'visible') {
      startAutoplay()
    }
  }

  const buildCarousel = () => {
    list.innerHTML = ''
    const clonesBefore = slides.slice(-visibleCount).map(el => el.cloneNode(true))
    const clonesAfter = slides.slice(0, visibleCount).map(el => el.cloneNode(true))
    allSlides = [...clonesBefore, ...slides, ...clonesAfter]
    allSlides.forEach(s => list.appendChild(s))

    list.getBoundingClientRect()

    step = allSlides[0]
      ? allSlides[0].getBoundingClientRect().width + getGap(list)
      : 0

    if (totalSpan) totalSpan.textContent = slides.length
  }

  const initCarousel = (preserveRealIndex = 0) => {
    buildCarousel()
    currentIndex = visibleCount + preserveRealIndex
    updateTransform(false)
    updatePage()
  }

  initCarousel(0)

  prevBtns.forEach(btn => btn.addEventListener('click', () => moveSafe(-1)))
  nextBtns.forEach(btn => btn.addEventListener('click', () => moveSafe(1)))

  const startAutoplay = () => {
    stopAutoplay()
    autoplayTimer = setInterval(() => moveSafe(1), 4000)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  viewport.addEventListener('mouseenter', () => {
    pausedByHover = true
    stopAutoplay()
  })
  viewport.addEventListener('mouseleave', () => {
    pausedByHover = false
    if (document.visibilityState === 'visible') {
      startAutoplay()
    }
  })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      stopAutoplay()
    } else {
      if (!pausedByHover) {
        startAutoplay()
      }
    }
  })

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      const newVisible = getVisibleCount({ name: 'participants' })

      if (newVisible !== visibleCount) {
        const realIndex = ((currentIndex - visibleCount) + slides.length) % slides.length
        stopAutoplay()
        visibleCount = newVisible
        initCarousel(realIndex)

        if (!pausedByHover && document.visibilityState === 'visible') {
          startAutoplay()
        }
      } else {
        if (allSlides.length > 0) {
          step = allSlides[0].getBoundingClientRect().width + getGap(list)
          updateTransform(false)
        }
      }
    }, 200)
  })

  startAutoplay()
}

let tickersInitialized = false

const prepareTicker = (tickerEl) => {
  if (tickerEl.querySelector('.ticker__track')) return

  const originalChildren = Array.from(tickerEl.childNodes).filter(
    (node) => node.nodeType === Node.ELEMENT_NODE && !node.classList?.contains('ticker__track')
  )

  if (originalChildren.length === 0) return

  const track = document.createElement('div')

  track.className = 'ticker__track'
  ;[...originalChildren, ...originalChildren].forEach((child) =>
    track.appendChild(child.cloneNode(true))
  )

  tickerEl.innerHTML = ''
  tickerEl.appendChild(track)
}

const createTickerInstance = (positionClass) => {
  const template = document.getElementById('ticker-template')
  if (!template) {
    console.warn('Шаблон бегущей строки не найден')
    return null
  }

  const clone = template.content.firstElementChild.cloneNode(true)
  clone.classList.add(positionClass)
  prepareTicker(clone)

  return clone
}

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

const setupAllTickers = () => {
  if (tickersInitialized) return
  tickersInitialized = true

  const hero = document.querySelector('.hero')
  const main = document.querySelector('main')
  const footer = document.querySelector('.footer')

  if (hero && !hero.querySelector('.ticker--hero-inside')) {
    const heroTicker = createTickerInstance('ticker--hero-inside')
    if (heroTicker) hero.appendChild(heroTicker)
  }

  if (footer && !footer.querySelector('.ticker--footer-inside')) {
    const footerTicker = createTickerInstance('ticker--footer-inside')
    if (footerTicker) footer.insertBefore(footerTicker, footer.firstChild)
  }

  if (hero && main && !document.querySelector('.ticker--top-outside')) {
    const topTicker = createTickerInstance('ticker--top-outside')
    if (topTicker) insertAfter(topTicker, hero)
  }

  if (main && footer && !document.querySelector('.ticker--bottom-outside')) {
    const bottomTicker = createTickerInstance('ticker--bottom-outside')
    if (bottomTicker) insertAfter(bottomTicker, main)
  }

  if (typeof updateHeroSceneScale === 'function') {
    updateHeroSceneScale()
  }
}

const positionAirplane = () => {
  const airplane = document.querySelector('.stages__airplane--mobile')
  const list = document.querySelector('.stages__list')
  const stages = document.querySelector('.stages')

  if (!airplane || !list || !stages) return
  if (window.matchMedia('(min-width: 1200px)').matches) return

  const prevTransform = list.style.transform
  const prevTransition = list.style.transition

  list.style.transition = 'none'
  list.style.transform = 'none'

  const listRect = list.getBoundingClientRect()
  const stagesRect = stages.getBoundingClientRect()

  list.style.transform = prevTransform
  list.style.transition = prevTransition

  if (listRect.width === 0 || listRect.height === 0) return

  const isTablet = window.matchMedia('(min-width: 1025px) and (max-width: 1199px)').matches

  const TARGET_OFFSET_TOP = isTablet ? -145.04 : -144.57
  const TARGET_OFFSET_LEFT = isTablet ? 4.55 : 4.55

  const top = listRect.top - stagesRect.top + TARGET_OFFSET_TOP
  const left = listRect.left - stagesRect.left + TARGET_OFFSET_LEFT

  airplane.style.top = top + 'px'
  airplane.style.left = left + 'px'
}

const updateHeroSceneScale = () => {
  const hero = document.querySelector('.hero')
  const ticker = document.querySelector('.ticker--hero-inside')

  if (!hero || !ticker) return

  const heroWidth = hero.clientWidth
  const heroHeight = hero.clientHeight
  const tickerHeight = ticker.offsetHeight || 0
  const isDesktop = window.matchMedia('(min-width: 768px)').matches

  if (isDesktop) {
    const availableHeight = heroHeight - tickerHeight
    const scale = availableHeight / 700

    document.documentElement.style.setProperty('--scene-scale', scale.toString())
    document.documentElement.style.setProperty('--ticker-height', tickerHeight + 'px')
  } else {
    const scale = heroWidth / 375
    const contentBottom = 772 * scale
    const sceneBottom = 812 * scale
    const offset = sceneBottom - contentBottom

    document.documentElement.style.setProperty('--scene-scale', scale.toString())
    document.documentElement.style.setProperty('--ticker-height', tickerHeight - offset + 'px')
  }
}

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.animate')
    ?.forEach((el) => observer.observe(el))
}

const mediaMobile = window.matchMedia('(max-width: 767px)')
const DESKTOP_BREAKPOINTS = [768, 900, 1100, 1280]
const desktopMQLs = DESKTOP_BREAKPOINTS.map((bp) => {
  return window.matchMedia(`(min-width: ${bp}px)`)
})

const enableMobileResize = () => {
  window.addEventListener('resize', updateHeroSceneScale)
}

const disableMobileResize = () => {
  window.removeEventListener('resize', updateHeroSceneScale)
}

const onDesktopBreakpointChange = () => {
  updateHeroSceneScale()
}

const onModeChange = (e) => {
  if (e.matches) {
    enableMobileResize()
    desktopMQLs.forEach((mql) => {
      mql.removeEventListener('change', onDesktopBreakpointChange)
    })

    updateHeroSceneScale()
  } else {
    disableMobileResize()
    desktopMQLs.forEach((mql) => {
      mql.addEventListener('change', onDesktopBreakpointChange)
    })

    updateHeroSceneScale()
  }
}

if (mediaMobile.matches) {
  enableMobileResize()
} else {
  desktopMQLs.forEach((mql) => {
    mql.addEventListener('change', onDesktopBreakpointChange)
  })
}

window.addEventListener('resize', () => {
  clearTimeout(window._airplaneResizeTimer)
  window._airplaneResizeTimer = setTimeout(positionAirplane, 100)
})

mediaMobile.addEventListener('change', onModeChange)

window.addEventListener('load', () => {
  updateHeroSceneScale()
  positionAirplane()
})

document.addEventListener('DOMContentLoaded', () => {
  setupAllTickers()

  document.querySelectorAll('[data-carousel]').forEach(root => {
    if (root.dataset.carousel === 'participants') {
      setupInfiniteCarousel(root)
    } else {
      bindCarousel(root)
    }
  })

  initScrollAnimations()
  setTimeout(positionAirplane, 300)
})

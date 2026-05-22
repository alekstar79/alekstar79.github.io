import { getVisibleCount, getGap } from './utils.js'

/**
 * Создаёт и запускает бесконечную (циклическую) карусель «Участники».
 * @param {HTMLElement} root - корневой элемент секции с атрибутом data-carousel
 */
export function setupInfiniteCarousel(root) {
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

  /**
   * Применяем сдвиг к списку слайдов.
   * @param {boolean} animate - нужно ли анимировать переход
   */
  function updateTransform(animate) {
    list.style.transition = animate ? 'transform 0.35s ease' : 'none'
    list.style.transform = `translateX(-${currentIndex * step}px)`
  }

  /** Обновляет отображаемый номер текущей страницы */
  function updatePage() {
    if (!pageSpan) return
    const realIndex = ((currentIndex - visibleCount) + slides.length) % slides.length
    pageSpan.textContent = `${realIndex + 1}`
  }

  /** Останав автоматической прокрутки */
  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  /** Запуск автоматической прокрутки */
  function startAutoplay() {
    stopAutoplay()
    autoplayTimer = setInterval(() => moveSafe(1), 4000)
  }

  /**
   * Перемещает карусель на один шаг в заданном направлении.
   * @param {number} dir - направление (-1 или 1)
   */
  async function moveSafe(dir) {
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

    // Бесшовный переход при достижении клонов
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

  /**
   * Дожидаемся полной загрузки всех изображений внутри слайдов.
   * @returns {Promise<void>}
   */
  async function waitForImages() {
    const images = list.querySelectorAll('img')

    await Promise.all([...images].map(img => {
      if (img.complete) return Promise.resolve()
      return new Promise(resolve => {
        img.onload = resolve
        img.onerror = resolve
      })
    }))
  }

  /**
   * Пересчитываем шаг на основе реальной ширины первого слайда и gap.
   * Гарантирует актуальный layout.
   */
  function recalcStep() {
    if (allSlides.length === 0) return

    list.getBoundingClientRect()
    step = allSlides[0].getBoundingClientRect().width + getGap(list)
  }

  /**
   * Строим DOM-структуру карусели с клонами для бесконечности.
   */
  function buildCarouselDOM() {
    list.innerHTML = ''

    const clonesBefore = slides.slice(-visibleCount).map(el => el.cloneNode(true))
    const clonesAfter = slides.slice(0, visibleCount).map(el => el.cloneNode(true))

    allSlides = [...clonesBefore, ...slides, ...clonesAfter]
    allSlides.forEach(s => list.appendChild(s))
    if (totalSpan) totalSpan.textContent = `${slides.length}`
  }

  /**
   * Полная инициализация карусели (асинхронная).
   * @param {number} [preserveRealIndex=0] - реальный индекс слайда, который нужно показать
   * @returns {Promise<void>}
   */
  async function initCarousel(preserveRealIndex = 0) {
    buildCarouselDOM()

    await waitForImages()
    await new Promise(resolve => requestAnimationFrame(resolve))

    recalcStep()
    currentIndex = visibleCount + preserveRealIndex
    updateTransform(false)
    updatePage()
  }

  // Инициализация: дожидаемся готовности, затем запускаем автопрокрутку
  initCarousel(0)
    .then(() => {
      startAutoplay()
    })
    .catch(err => {
      console.error('Ошибка инициализации карусели участников:', err)
    })

  prevBtns.forEach(btn => btn.addEventListener('click', () => moveSafe(-1)))
  nextBtns.forEach(btn => btn.addEventListener('click', () => moveSafe(1)))

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
      if (!pausedByHover) startAutoplay()
    }
  })

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)

    resizeTimer = setTimeout(async () => {
      const newVisible = getVisibleCount({ name: 'participants' })
      if (newVisible !== visibleCount) {
        const realIndex = ((currentIndex - visibleCount) + slides.length) % slides.length
        stopAutoplay()
        visibleCount = newVisible
        await initCarousel(realIndex)
        if (!pausedByHover && document.visibilityState === 'visible') {
          startAutoplay()
        }
      } else {
        if (allSlides.length > 0) {
          await new Promise(resolve => requestAnimationFrame(resolve))
          recalcStep()
          updateTransform(false)
        }
      }
    }, 200)
  })
}

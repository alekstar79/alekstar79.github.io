import { getVisibleCount, isCarouselActive, applyTransform } from './utils.js'

/**
 * Создаёт и запускает незацикленную карусель «Этапы».
 * @param {HTMLElement} root - корневой элемент секции с атрибутом data-carousel
 */
export function bindStagesCarousel(root) {
  const list = root.querySelector('.stages__list')

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

  /**
   * Обновляет состояние кнопок (disabled) в зависимости от текущего слайда.
   */
  function updateButtons() {
    if (!state.active) {
      state.prevButtons.forEach(btn => (btn.disabled = false))
      state.nextButtons.forEach(btn => (btn.disabled = false))
      return
    }

    const total = state.originals.length
    const isFirst = state.logicalIndex === 0
    const isLast = state.logicalIndex === total - 1

    state.prevButtons.forEach(btn => (btn.disabled = isFirst))
    state.nextButtons.forEach(btn => (btn.disabled = isLast))
  }

  /**
   * Перемещает карусель в указанном направлении.
   * @param {number} direction - направление (-1 для назад, 1 для вперёд)
   */
  function move(direction) {
    if (!state.active) return

    const total = state.originals.length
    const newIndex = state.logicalIndex + direction

    if (newIndex < 0 || newIndex >= total) return

    state.logicalIndex = newIndex
    state.trackIndex = newIndex
    applyTransform(state, true)
    updateButtons()
  }

  state.prevButtons.forEach(btn => btn.addEventListener('click', () => move(-1)))
  state.nextButtons.forEach(btn => btn.addEventListener('click', () => move(1)))

  state.dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (!state.active) return

      state.logicalIndex = index
      state.trackIndex = index

      applyTransform(state, true)
      updateButtons()
    })
  })

  let previousActive = false
  let previousVisible = 0

  /**
   * Обновляет карусель при изменении размеров окна (переключение между активным и неактивным режимами).
   */
  function refresh() {
    const nextActive = isCarouselActive(state)
    const nextVisible = getVisibleCount(state)

    if (nextActive !== previousActive || nextVisible !== previousVisible) {
      previousActive = nextActive
      previousVisible = nextVisible
      state.active = nextActive
      state.visibleCount = nextVisible
      state.list.replaceChildren()
      state.originals.forEach(slide => state.list.append(slide))
      state.logicalIndex = 0
      state.trackIndex = 0
      applyTransform(state, false)
      updateButtons()
    } else {
      applyTransform(state, false)
      updateButtons()
    }
  }

  window.addEventListener('resize', refresh)
  refresh()
}

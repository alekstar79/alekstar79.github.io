/**
 * Возвращает промис, который разрешается после полной загрузки DOM.
 * @returns {Promise<void>}
 */
export const ready = () =>
  new Promise(resolve => {
    if (document.readyState !== 'loading') {
      resolve()
    } else {
      document.addEventListener('DOMContentLoaded', () => resolve())
    }
  })

/**
 * Возвращает количество видимых слайдов для указанной карусели.
 * @param {{name: string}} state - объект состояния карусели (содержит поле name)
 * @returns {number} количество видимых слайдов
 */
export function getVisibleCount(state) {
  if (state.name === 'stages') return 1

  if (window.matchMedia('(min-width: 1025px)').matches) return 3
  if (window.matchMedia('(min-width: 600px)').matches) return 2

  return 1
}

/**
 * Проверяет, активна ли карусель в данный момент.
 * @param {{name: string}} state - объект состояния карусели
 * @returns {boolean} true, если карусель активна
 */
export function isCarouselActive(state) {
  return state.name !== 'stages' || !window.matchMedia('(min-width: 1200px)').matches
}

/**
 * Возвращает промежуток (gap) между слайдами.
 * @param {HTMLElement} list - DOM-элемент, содержащий слайды
 * @returns {number} значение gap в пикселях
 */
export function getGap(list) {
  const styles = window.getComputedStyle(list)
  return Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
}

/**
 * Возвращает ширину одного шага карусели (ширина слайда + gap).
 * @param {{list: HTMLElement}} state - объект состояния карусели (содержит list)
 * @returns {number} ширина шага в пикселях
 */
export function getStep(state) {
  const firstSlide = state.list.children.item(0)
  return firstSlide ? firstSlide.getBoundingClientRect().width + getGap(state.list) : 0
}

/**
 * Обновляет визуальные индикаторы (точки и номера страниц) в соответствии с текущим состоянием.
 * @param {object} state - объект состояния карусели
 * @param {HTMLElement[]} state.dots - массив элементов-точек
 * @param {HTMLElement[]} state.pageLabels - массив элементов, отображающих номер текущей страницы
 * @param {HTMLElement[]} state.totalLabels - массив элементов, отображающих общее количество страниц
 * @param {HTMLElement[]} state.originals - массив оригинальных слайдов (для вычисления общего числа)
 * @param {number} state.logicalIndex - текущий логический индекс
 * @param {number} state.visibleCount - количество видимых слайдов
 * @param {string} state.name - имя карусели ('stages' или 'participants')
 */
export function updateIndicators(state) {
  const total = state.originals.length
  const visible = state.name === 'participants' ? state.visibleCount : 1
  const shownNumber = ((state.logicalIndex + visible - 1) % total) + 1

  state.dots.forEach((dot, index) => {
    const isActive = index === state.logicalIndex
    dot.classList.toggle('dot--active', isActive)
    dot.setAttribute('aria-selected', String(isActive))
  })

  state.pageLabels.forEach(label => (label.textContent = String(shownNumber)))
  state.totalLabels.forEach(label => (label.textContent = String(total)))
}

/**
 * Применяет CSS-трансформацию для перемещения слайдов к текущему индексу.
 * @param {object} state - объект состояния карусели
 * @param {boolean} animate - следует ли анимировать переход
 */
export function applyTransform(state, animate) {
  if (!state.active) {
    state.list.style.transition = ''
    state.list.style.transform = ''
    updateIndicators(state)
    return;
  }
  state.list.style.transition = animate ? 'transform 0.35s ease' : 'none'
  state.list.style.transform = `translateX(-${state.trackIndex * getStep(state)}px)`
  updateIndicators(state)
}

/**
 * Инициализирует анимацию появления блоков при скролле (класс .animate).
 */
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.animate')
    ?.forEach(el => observer.observe(el))
}

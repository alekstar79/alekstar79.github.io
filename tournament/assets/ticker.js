let tickersInitialized = false

/**
 * Подготавливает DOM-структуру для бегущей строки, создавая трек с дублированным контентом.
 * @param {HTMLElement} tickerEl - элемент контейнера бегущей строки
 */
function prepareTicker(tickerEl) {
  if (tickerEl.querySelector('.ticker__track')) return

  const originalChildren = Array.from(tickerEl.childNodes).filter(
    node => node.nodeType === Node.ELEMENT_NODE && !node.classList?.contains('ticker__track')
  )

  if (originalChildren.length === 0) return

  const track = document.createElement('div')
  track.className = 'ticker__track'
  ;[...originalChildren, ...originalChildren].forEach(child =>
    track.appendChild(child.cloneNode(true))
  )

  tickerEl.innerHTML = ''
  tickerEl.appendChild(track)
}

/**
 * Создаёт экземпляр тикера на основе шаблона #ticker-template.
 * @param {string} positionClass - CSS-класс, определяющий позицию тикера
 * @returns {HTMLElement|null} готовый DOM-элемент тикера или null, если шаблон не найден
 */
function createTickerInstance(positionClass) {
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

/**
 * Вставляет новый элемент сразу после указанного.
 * @param {HTMLElement} newNode - вставляемый элемент
 * @param {HTMLElement} referenceNode - элемент, после которого производится вставка
 */
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

/**
 * Создаёт все экземпляры тикера на странице (внутри hero, footer, а также между секциями).
 */
export function setupAllTickers() {
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
}

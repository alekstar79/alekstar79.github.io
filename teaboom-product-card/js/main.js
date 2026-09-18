import { openLightbox, closeLightbox, isLightboxOpen } from '/teaboom-product-card/js/modules/lightbox.js'
import { showToast, hideToast, AUTO_HIDE_DELAY } from '/teaboom-product-card/js/modules/toast.js'
import { getVariant, prepareVariantView } from '/teaboom-product-card/js/modules/variants.js'
import { getNextWishlistState } from '/teaboom-product-card/js/modules/wishlist.js'

// ----------------------------------------------------------
// Уведомление о добавлении в корзину
// ----------------------------------------------------------

const toast = document.getElementById('cart-toast')
let autoHideTimer = null

if (toast) {
  toast.removeAttribute('hidden')

  toast.querySelector('[data-js="toast-close"]')
    .addEventListener('click', () => {
      hideToast({ toast })
      toast.setAttribute('aria-hidden', 'true')
      toast.inert = true
      clearTimeout(autoHideTimer)
      autoHideTimer = null
    })
}

/**
 * Показывает уведомление с заголовком и планирует автозакрытие.
 * @param {string} title
 */
const showCartToast = (title) => {
  if (!toast) return

  const titleEl = toast.querySelector('[data-js="toast-title"]')
  if (titleEl) {
    titleEl.textContent = title
  }

  toast.inert = false
  toast.removeAttribute('aria-hidden')

  showToast({ toast })

  clearTimeout(autoHideTimer)
  autoHideTimer = setTimeout(() => {
    hideToast({ toast })
    toast.setAttribute('aria-hidden', 'true')
    toast.inert = true
    autoHideTimer = null
  }, AUTO_HIDE_DELAY)
}

// ----------------------------------------------------------
// Выбор фасовки и отправка формы
// ----------------------------------------------------------

const root = document.querySelector('.product')

if (root) {
  const form = root.querySelector('.product__form')
  const priceEl = root.querySelector('[data-js="current-price"]')
  const oldPriceEl = root.querySelector('[data-js="old-price"]')
  const skuEl = root.querySelector('[data-js="sku"]')

  /**
   * Обновляет цену, старую цену и артикул под выбранную фасовку.
   * @param {string} weight
   */
  const renderVariant = (weight) => {
    const variant = getVariant(weight)

    if (!variant || !priceEl || !oldPriceEl || !skuEl) {
      return
    }

    const view = prepareVariantView(variant)

    priceEl.textContent = view.price
    skuEl.textContent = view.sku

    if (view.oldPrice) {
      oldPriceEl.textContent = view.oldPrice
      oldPriceEl.removeAttribute('hidden')
    } else {
      oldPriceEl.setAttribute('hidden', '')
    }
  }

  if (form) {
    form.querySelector('.variants__list')
      .addEventListener('change', (event) => {
        if (event.target instanceof HTMLInputElement) {
          renderVariant(event.target.value)
        }
      })

    const initialVariant = form.querySelector('input[name="variant"]:checked')
    if (initialVariant instanceof HTMLInputElement) {
      renderVariant(initialVariant.value)
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const selected = form.querySelector('input[name="variant"]:checked')
      if (selected instanceof HTMLInputElement) {
        showCartToast(`Ананасовый улун, ${selected.value} г`)
      }
    })
  }
}

// ----------------------------------------------------------
// Модальное окно просмотра изображения
// ----------------------------------------------------------

const lightbox = document.getElementById('product-lightbox')
const lightboxOpener = document.querySelector('[data-js="lightbox-open"]')

if (lightbox && lightboxOpener) {
  lightbox.removeAttribute('hidden')

  const closeButton = lightbox.querySelector('.lightbox__close')
  const closeTriggers = lightbox.querySelectorAll('[data-js="lightbox-close"]')
  let triggerElement = null

  const handleOpen = (event) => {
    event.preventDefault()

    triggerElement = document.activeElement
    lightbox.inert = false
    lightbox.removeAttribute('aria-hidden')

    openLightbox({ lightbox, closeButton })
  }

  const handleClose = () => {
    closeLightbox({ lightbox, focusTarget: triggerElement })

    lightbox.setAttribute('aria-hidden', 'true')
    lightbox.inert = true
    triggerElement = null
  }

  // Удержание фокуса внутри диалога: Tab циклится на кнопке закрытия.
  const handleKeydown = (event) => {
    if (event.key !== 'Tab') return

    event.preventDefault()

    if (closeButton instanceof HTMLElement) {
      closeButton.focus()
    }
  }

  lightboxOpener.addEventListener('click', handleOpen)
  closeTriggers.forEach((el) => el.addEventListener('click', handleClose))
  lightbox.addEventListener('keydown', handleKeydown)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isLightboxOpen(lightbox)) {
      handleClose()
    }
  })
}

// ----------------------------------------------------------
// Кнопка «В избранное»
// ----------------------------------------------------------

const wishlistButton = document.querySelector('[data-js="wishlist-toggle"]')

if (wishlistButton) {
  const handleWishlistToggle = () => {
    const isActive = wishlistButton.getAttribute('aria-pressed') === 'true'
    const state = getNextWishlistState(isActive)

    wishlistButton.setAttribute('aria-pressed', String(state.pressed))
    wishlistButton.setAttribute('data-tooltip', state.label)
    wishlistButton.setAttribute('aria-label', state.label)
    wishlistButton.classList.toggle('is-active', state.pressed)
  }

  wishlistButton.addEventListener('click', handleWishlistToggle)
}

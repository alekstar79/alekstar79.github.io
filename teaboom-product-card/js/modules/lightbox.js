const BODY_LOCK_CLASS = 'is-modal-open'
const OPEN_CLASS = 'is-open'

/**
 * Открывает диалог: показывает модалку, блокирует скролл страницы,
 * переводит фокус на кнопку закрытия.
 * @param {{ lightbox: Element, closeButton: Element|null }} context
 */
export const openLightbox = ({ lightbox, closeButton }) => {
  lightbox.classList.add(OPEN_CLASS)
  document.body.classList.add(BODY_LOCK_CLASS)

  if (closeButton instanceof HTMLElement) {
    closeButton.focus()
  }
}

/**
 * Закрывает диалог и возвращает фокус на элемент, открывший модалку.
 * @param {{ lightbox: Element, focusTarget: Element|null }} context
 */
export const closeLightbox = ({ lightbox, focusTarget }) => {
  if (!lightbox.classList.contains(OPEN_CLASS)) {
    return
  }

  lightbox.classList.remove(OPEN_CLASS)
  document.body.classList.remove(BODY_LOCK_CLASS)

  if (focusTarget instanceof HTMLElement) {
    focusTarget.focus()
  }
}

/**
 * Проверяет, открыта ли модалка
 * @param {Element} lightbox
 * @returns {boolean}
 */
export const isLightboxOpen = (lightbox) =>
  lightbox.classList.contains(OPEN_CLASS)

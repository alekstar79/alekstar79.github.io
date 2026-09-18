const VISIBLE_CLASS = 'is-visible'

export const AUTO_HIDE_DELAY = 5000

/**
 * Показывает уведомление
 * @param {{ toast: Element }} context
 */
export const showToast = ({ toast }) => {
  toast.classList.add(VISIBLE_CLASS)
}

/**
 * Скрывает уведомление
 * @param {{ toast: Element }} context
 */
export const hideToast = ({ toast }) => {
  toast.classList.remove(VISIBLE_CLASS)
}

const LABELS = {
  add: 'Добавить в избранное',
  remove: 'Убрать из избранного'
}

/**
 * @typedef {Object} WishlistState
 * @property {boolean} pressed
 * @property {string} label
 */

/**
 * Вычисляет следующее состояние кнопки «В избранное».
 * @param {boolean} isActive - текущее состояние
 * @returns {WishlistState}
 */
export const getNextWishlistState = (isActive) => {
  const pressed = !isActive

  return {
    label: pressed ? LABELS.remove : LABELS.add,
    pressed
  }
}

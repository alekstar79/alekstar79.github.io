/**
 * @typedef {Object} Variant
 * @property {string} sku      - Артикул
 * @property {number} price    - Текущая цена, руб.
 * @property {number} oldPrice - Цена до скидки, руб.
 */

/**
 * @typedef {Object} VariantView
 * @property {string} sku
 * @property {string} price
 * @property {string|null} oldPrice
 */

/**
 * Варианты фасовки товара.
 * В реальном приложении приходят с сервера при инициализации карточки.
 * @type {Record<string, Variant>}
 */
const VARIANTS = {
  '100':  { sku: '01306', price: 326.40,  oldPrice: 349.20  },
  '500':  { sku: '01307', price: 1432.00, oldPrice: 1646.00 },
  '1000': { sku: '01308', price: 2064.00, oldPrice: 2592.00 },
  '5000': { sku: '01309', price: 6320.00, oldPrice: 8710.00 },
}

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

/**
 * Форматирование цены в строку
 * @param {number} value
 * @returns {string}
 */
const formatPrice = (value) => `${priceFormatter.format(value)} ₽`

/**
 * Возвращает данные варианта по весу фасовки
 * @param {string} weight
 * @returns {Variant|undefined}
 */
export const getVariant = (weight) => VARIANTS[weight]

/**
 * Готовит строки для отображения варианта.
 * Старая цена возвращается только при наличии скидки.
 * @param {Variant} variant
 * @returns {VariantView}
 */
export const prepareVariantView = ({ sku, price, oldPrice }) => ({
  sku,
  price: formatPrice(price),
  oldPrice: oldPrice > price
    ? formatPrice(oldPrice)
    : null
})

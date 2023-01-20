/**
 * Searching for an element by selector in parent elements.
 * @param {String} selector
 * @param {Element|Node} el
 * @param {Number} [i]
 * @return {Element}
 */
export function findElement(selector, el, i = 5)
{
    while (!el.classList.contains(selector) && --i) {
        el = el.parentElement
    }

    return el
}

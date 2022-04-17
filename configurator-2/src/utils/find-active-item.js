/**
 *  Searching for the active item in the selected list.
 * @param {HTMLUListElement} el
 * @return {?Number}
 */
export function findActiveListItem(el)
{
    let id = null

    ;[...el.querySelectorAll('li')].some(el => {
        if (!el.classList.contains('active')) return false

        id = +el.dataset.id

        return true
    })

    return id
}

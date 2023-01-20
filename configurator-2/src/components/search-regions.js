// noinspection JSUnusedGlobalSymbols,ES6PreferShortImport

import { createElements, createStyleLinks, debounce, btnTune, toShadow, Cost } from '../utils/index.js'
import { URL, SELECTOR, PHRASE, EVENT, SHADOW } from '../config.js'

import storage from '../store/index.js'

const styles = createStyleLinks([
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'style/search-regions.css'
])

/**
 * @class SearchRegions
 * @constructor
 *
 * @property {HTMLInputElement} input
 * @property {HTMLUListElement} list
 */
export default class SearchRegions extends HTMLElement
{
    constructor()
    {
        super()

        if (SHADOW.SEARCH) return

        SHADOW.SEARCH = true

        storage.on(EVENT.CHANGED, this.toggleBtn.bind(this))
        this.childNodes.forEach(this.setNodeRef, this)

        this.setListeners()
    }

    connectedCallback()
    {
        if (this.shadowRoot) return

        fetch(URL).then(response => response.json())
            .then(regions => regions.map(data => this.createItem(new Cost(data))))
            .then(regions => regions.forEach(this.list.appendChild, this.list))

        toShadow(this, styles)
    }

    keyupHandler({ target })
    {
        const filter = target.value.toLowerCase()

        this.list.childNodes.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none'
        })
    }

    focusHandler(timeout = 0)
    {
        return debounce(() => this.list?.classList.add(SELECTOR.ACTIVE), timeout)
    }

    blurHandler(timeout = 0)
    {
        return debounce(() => this.list?.classList.remove(SELECTOR.ACTIVE), timeout)
    }

    listClickHandler({ target })
    {
        this.list.classList.add(SELECTOR.ACTIVE)
        this.input.focus()

        if (target.tagName !== 'BUTTON') return

        storage.resolve({
            extra: JSON.parse(target.dataset.extra),
            value: target.dataset.value,
            name: target.dataset.name,
            id: +target.dataset.id
        })
    }

    toggleBtn({ current: { id }, change, add })
    {
        if (change) return

        [...this.list.querySelectorAll('li')].some(el => {
            if (+el.dataset.id !== id) return false

            const btn = el.querySelector('button')

            btn.textContent = add ? PHRASE.DEL : PHRASE.ADD

            btn.classList.toggle(SELECTOR.ADD)
            btn.classList.toggle(SELECTOR.DEL)

            return true
        })
    }

    /**
     * @param {Cost} cost
     * @return {HTMLLIElement}
     */
    createItem({ id, name, value, extra })
    {
        const [span, li, btn] = createElements(['span','li','button'])

        btn.dataset.value = value
        btn.dataset.extra = extra
        btn.dataset.name = name
        btn.dataset.id = id

        btnTune(btn, 'ADD')

        li.insertAdjacentElement('afterbegin', span)
        li.insertAdjacentElement('beforeend', btn)
        li.classList.add('search-form__item')
        li.dataset.id = id

        span.classList.add('title')
        span.textContent = name

        return li
    }

    setListeners()
    {
        this.list.addEventListener('click', this.listClickHandler.bind(this))
        this.input.addEventListener('keyup', this.keyupHandler.bind(this))
        this.input.addEventListener('focus', this.focusHandler())
        this.input.addEventListener('blur', this.blurHandler(90))
    }

    setNodeRef(el)
    {
        switch (true) {
            case el instanceof HTMLInputElement:
                this.input = el
                break
            case el instanceof HTMLUListElement:
                this.list = el
                break
        }
    }
}

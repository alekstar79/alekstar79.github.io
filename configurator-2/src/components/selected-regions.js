// noinspection JSUnusedGlobalSymbols,ES6PreferShortImport

import { createStyleLinks, createElements, findActiveListItem, findElement, getListExtras, toShadow, btnTune, safeSum, MediaTracker, Enum } from '../utils/index.js'
import { setBaseChargeValidator, setChargeValueValidator, setMaxWeightValidator, setMinWeightValidator, fitNumber } from '../validators/index.js'
import { setBaseChargeValue, setExtraChargeValue, addExtraChargeBlock, removeExtraChargeBlock } from '../utils/store-setters.js'

import { EVENT, SELECTOR, PHRASE, NODE_TYPES, DOTS_PATTERN, SCREEN, SHADOW } from '../config.js'
import storage from '../store/index.js'

const html = '<li class="accordion__item list-item disabled">Доставка не настроена</li>',
    extraChargeTmpl = document.getElementById(SELECTOR.EXTRA_CHARGE_BLOCK),

    styles = createStyleLinks([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      'style/selected-regions.css'
    ]),

    media = new MediaTracker(SCREEN.MIN_WIDTH),
    Types = new Enum(NODE_TYPES)

/**
 * @class SelectedRegions
 * @constructor
 *
 * @property {HTMLUListElement} list
 */
export default class SelectedRegions extends HTMLElement
{
  constructor()
  {
    super()

    if (SHADOW.SELECTED) return

    SHADOW.SELECTED = true

    this.childNodes.forEach(this.setNodeRef, this)
    this.list.addEventListener('click', this.clickHandler.bind(this))
    storage.on(EVENT.CHANGED, this.rebuildSelectedList.bind(this))

    this.reset([])
  }

  connectedCallback()
  {
    if (this.shadowRoot) return

    toShadow(this, styles)
  }

  /**
   * @param {Object[]} list
   * @return {Object[]}
   */
  reset(list)
  {
    list.length && (this.active = findActiveListItem(this.list))

    this.list.innerHTML = list.length ? '' : html

    return list
  }

  /**
   * Toggling the active accordion tab.
   * @param {HTMLElement} target
   * @param {Object} types
   */
  toggleAccordion(target, types)
  {
    let isActive, elements, node = target

    switch (true) {
      case types.SPAN:
        node = target.parentElement.parentElement
        break
      case types.DIV:
        node = target.parentElement
        break
    }

    elements = node.parentElement.querySelectorAll('li')
    isActive = node.classList.contains(SELECTOR.ACTIVE)

    for (const li of elements) {
      li.classList.remove(SELECTOR.ACTIVE)
    }

    isActive || node.classList.add(SELECTOR.ACTIVE)
  }

  /**
   * Handler for clicks on list.
   * @param {Event}
   */
  clickHandler({ target })
  {
    const types = Types.determine(target.tagName)

    if (!types.BUTTON) {
      return this.toggleAccordion(target, types)
    }

    switch (true) {
      case target.classList.contains(SELECTOR.ADD_EXTRA_CHARGE):
        addExtraChargeBlock({ target })
        break
      case target.classList.contains(SELECTOR.DEL_EXTRA_CHARGE):
        removeExtraChargeBlock({ target })
        break

      default: storage.deselect({
        id: +target.dataset.id
      })
    }
  }

  /**
   * Handler for the extra input field.
   * @param {HTMLInputElement} input
   * @param {RegExp} regexp
   */
  extraChargeInputHandler(input, regexp)
  {
    const li = findElement('li', input)

    input.value = input.value.replace(regexp, '')
    input.classList.remove('error')

    li.querySelectorAll('.error-tip').forEach(e => e.remove())
    li.classList.remove('error')
  }

  /**
   * Handler for the base input field.
   * @param {HTMLInputElement} input
   * @param {{id, value}} cost
   */
  baseChargeInputHandler(input, cost)
  {
    let li, extra = []

    setBaseChargeValidator(input)

    function keyUpHandler({ target = input })
    {
      extra.length || (extra = getListExtras(target))

      li = findElement(SELECTOR.LIST_ITEM, target)
      li.querySelectorAll('.error-tip').forEach(e => e.remove())
      li.classList.remove('error')

      target.value = target.value.replace(/[^\d.]/, '')
      target.classList.remove('error')

      extra.forEach(el => {
        const span = el.querySelector(`.${SELECTOR.TOTAL_COST}`),
            input = el.querySelectorAll('input')[2]

        span.textContent = safeSum(input.value, target.value)
      })

      setBaseChargeValue({
        value: fitNumber(target.value, 2),
        id: cost.id
      })
    }
    function handleMediaChange(e)
    {
      if (!e.matches) return

      keyUpHandler({})
    }

    input.addEventListener('keyup', keyUpHandler)
    media.setHandler(handleMediaChange)

    input.value = fitNumber(cost.value, 2)
    input.pattern = DOTS_PATTERN
    input.autofocus = true
  }

  /**
   *
   * @param {String|Number} id
   * @param {HTMLInputElement} input
   * @param {{charge_value, max_weight, min_weight}} extra
   * @param {String|Number} idx
   * @return {HTMLDivElement}
   */
  createExtraCharge(id, input, extra, idx)
  {
    let node, div, btn, span, inputs

    node = extraChargeTmpl.content.cloneNode(true)
    div = node.firstElementChild

    btn = div.querySelector(`.${SELECTOR.DEL_EXTRA_CHARGE}`)
    span = div.querySelector(`.${SELECTOR.TOTAL_COST}`)
    inputs = div.querySelectorAll('input')

    inputs[2].value = fitNumber(extra.charge_value, 2, true)
    inputs[2].pattern = DOTS_PATTERN
    inputs[2].autofocus = true

    inputs[1].value = fitNumber(extra.max_weight, 3)
    inputs[1].pattern = DOTS_PATTERN
    inputs[1].autofocus = true

    inputs[0].value = fitNumber(extra.min_weight, 3)
    inputs[0].pattern = DOTS_PATTERN
    inputs[0].autofocus = true

    setChargeValueValidator(inputs[2])
    setMaxWeightValidator(inputs[1])
    setMinWeightValidator(inputs[0])

    inputs[2].addEventListener('keyup', ({ target }) => {
      this.extraChargeInputHandler(target, /([^\d.+-])/)

      setExtraChargeValue({ id, idx, fid: 'charge_value', value: fitNumber(target.value, 2, true) })

      span.textContent = safeSum(input.value, target.value)
    })

    inputs[1].addEventListener('keyup', ({ target }) => {
      this.extraChargeInputHandler(target, /[^\d.]/)

      setExtraChargeValue({ id, idx, fid: 'max_weight', value: fitNumber(target.value, 3) })
    })

    inputs[0].addEventListener('keyup', ({ target }) => {
      this.extraChargeInputHandler(target, /[^\d.]/)

      setExtraChargeValue({ id, idx, fid: 'min_weight', value: fitNumber(target.value, 3) })
    })

    span.textContent = safeSum(input.value, extra.charge_value)

    btn.dataset.idx = idx
    btn.dataset.id = id

    return div
  }

  createBaseCharge({ id, value })
  {
    const [div, input, btn, span] = createElements(['div','input','button','span'])

    div.classList.add(SELECTOR.BASE_CHARGE)

    span.classList.add(SELECTOR.BASE_CHARGE_TITLE)
    span.textContent = PHRASE.BASE_CHARGE_TITLE

    btn.classList.add('btn', 'primary', SELECTOR.ADD_EXTRA_CHARGE)
    btn.textContent = PHRASE.ADD
    btn.dataset.id = id

    this.baseChargeInputHandler(input, { id, value })
    input.classList.add(SELECTOR.FORM_CONTROL, 'col')
    input.value = value
    input.type = 'text'

    ;[span, input, btn].forEach(div.appendChild, div)

    return [div, input]
  }

  createAccordionContent({ id, value, extra })
  {
    const [block, input] = this.createBaseCharge({ id, value }),
        [div] = createElements(['div'])

    div.appendChild(block)
    extra.map(this.createExtraCharge.bind(this, id, input))
        .forEach(div.appendChild, div)

    div.classList.add(SELECTOR.ACCORDION_CONTENT)

    return div
  }

  createItem({ id, name, value, extra })
  {
    const [li, div, span, btn] = createElements(['li','div','span','button']),
        cont = this.createAccordionContent({ id, value, extra })

    btn.dataset.id = id

    btnTune(btn, 'DEL')

    span.classList.add('title')
    span.textContent = name

    div.classList.add(SELECTOR.ACCORDION_TITLE)
    div.appendChild(span)
    div.appendChild(btn)

    li.classList.add(SELECTOR.ACCORDION_ITEM, SELECTOR.LIST_ITEM)
    li.insertAdjacentElement('afterbegin', div)
    li.insertAdjacentElement('beforeend', cont)
    li.dataset.id = id

    if (this.active && this.active === id) {
      li.classList.add(SELECTOR.ACTIVE)
    }

    return li
  }

  /**
   * Rebuilding the selected list.
   * @param {Object[]} list
   */
  rebuildSelectedList({ list })
  {
    this.reset(list).map(this.createItem, this).forEach(this.list.appendChild, this.list)
  }

  setNodeRef(el)
  {
    if (el instanceof HTMLUListElement) {
      this.list = el
    }
  }
}

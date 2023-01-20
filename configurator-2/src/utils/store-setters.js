import storage from '../store/index.js'
import { EXTRA } from '../config.js'

/**
 * Setter for entering value of the base charge in the input field.
 * @param {{ id: Number, value: Number }}
 */
export function setBaseChargeValue({ id, value })
{
    const data = storage.get({ id })

    data.value = value

    storage.input(data)
}

/**
 * Setter for entering value of the extra charge in the input field.
 * @param {{ id: Number, idx: Number, fid: String, value: Number }}
 */
export function setExtraChargeValue({ id, idx, fid, value })
{
    const data = storage.get({ id })

    data.extra[idx][fid] = value

    storage.input(data)
}

/**
 * Handler for the click on the add extra charge button.
 * @param {HTMLElement} target
 */
export function addExtraChargeBlock({ target })
{
    const data = storage.get({ id: +target.dataset.id })

    data.extra.push({
        charge_value: EXTRA.CHARGE_VALUE,
        min_weight: EXTRA.MIN_WEIGHT,
        max_weight: EXTRA.MAX_WEIGHT
    })

    storage.change(data)
}

/**
 * Handler for the click on the del extra charge button.
 * @param {HTMLElement} target
 */
export function removeExtraChargeBlock({ target })
{
    const data = storage.get({ id: +target.dataset.id })

    data.extra.splice(+target.dataset.idx, 1)

    storage.change(data)
}

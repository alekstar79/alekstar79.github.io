// noinspection JSUnusedGlobalSymbols,ES6PreferShortImport

import { FinalValidator } from '../validators/index.js'
import { Adapter, display } from '../utils/index.js'

import { EVENT, SELECTOR } from '../config.js'
import storage from '../store/index.js'

export default class AppComponent extends HTMLElement
{
    constructor()
    {
        super()

        const validator = new FinalValidator(this.querySelector(`.${SELECTOR.SELECTED_LIST}`)),
            save = this.querySelector(`.${SELECTOR.BTN_SAVE_CHANGES}`)

        save.addEventListener('click', () => {
            if (validator.validate()) {
                display(Adapter.perform(storage))
            }
        })

        storage.on(EVENT.CHANGED, ({ list }) => {
            save.disabled = !list.length
        })
    }
}

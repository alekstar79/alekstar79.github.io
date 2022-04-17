import { SELECTOR, ERROR } from './config.js'

import './definitions.js'

/**
* Application scope
*/
(async function() {

    let /** @type {HTMLTemplateElement} */ template,
        /** @type {HTMLDivElement}      */ err

    await customElements.whenDefined(SELECTOR.APP_COMPONENT)

    if (!(template = document.getElementById(SELECTOR.APP_COMPONENT_TMPL))) {
        err = document.createElement('div')

        err.textContent = ERROR.SERVICE_TEMPORARILY_UNAVAILABLE
        err.classList.add('container', 'my-5', 'py-3')
    }

    document.body.appendChild(template?.content || err)

})()

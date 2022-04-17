/**
 * @param {HTMLElement} root
 * @param {HTMLLinkElement[]} [styles]
 * @return {HTMLElement}
 */
export function toShadow(root, styles = [])
{
    try {

        let newRoot, shadowRoot

        if (root.shadowRoot) {
            console.error('[shadow]: Attach shadow multiple times', root, root.shadowRoot)

        } else {
            newRoot = root.cloneNode()
            shadowRoot = newRoot.attachShadow({ mode: 'open' })

            styles.forEach(shadowRoot.appendChild, shadowRoot)

            while (root.hasChildNodes()) {
                shadowRoot.appendChild(root.firstChild)
            }

            root.parentElement?.replaceChild(newRoot, root)

            return newRoot
        }

    } catch (e) {
        console.group('[shadow]: Make shadow-root failed')
        console.error(root, e)
        console.groupEnd()
    }
}

import { ERROR } from '../config.js'

/**
 * @class MediaTracker
 * @constructor
 */
export class MediaTracker
{
    constructor(width)
    {
        this.maxWidth = window.matchMedia(`(max-width: ${width - 1}px)`)
        this.minWidth = window.matchMedia(`(min-width: ${width + 1}px)`)
    }

    setHandler(handler)
    {
        if (typeof handler !== 'function') {
            throw new Error(ERROR.MISMATCH_OF_TYPES)
        }

        this.maxWidth.addEventListener('change', handler)
        this.minWidth.addEventListener('change', handler)
    }
}

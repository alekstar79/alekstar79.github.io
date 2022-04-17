/**
 * @class Emitter
 * @constructor
 *
 * @property {Object} events
 */
export class Emitter
{
    constructor()
    {
        this.events = {}
    }

    on(id, fn)
    {
        (this.events[id] = this.events[id] || []).push(fn)
    }

    emit(id, ...data)
    {
        (this.events[id] || []).forEach(fn => fn(...data))
    }
}

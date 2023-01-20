import { CONSOLE, LOCALE } from '../config.js'

/**
 * Printing data to the console, according to the requirements.
 * @param {?Array<Object>} data
 */
export function display(data)
{
    if (!data) return

    const walkArray = (arr, p) => arr.map(printObject.bind(null, p)),
        print = str => console.log(`%c${str}`, CONSOLE.STYLE),

        now = new Date(),

        date = now.toLocaleDateString(LOCALE),
        time = now.toLocaleTimeString(LOCALE)

    function printObject(p, obj, i, a)
    {
        const c = i < a.length - 1 ? ',' : ''

        print(`${' '.repeat(p)}{`)

        Object.entries(obj).forEach(([k, v]) => {
            switch (true) {
                case !Array.isArray(v):
                    print(`${' '.repeat(p + 2)}${k}: ${v},`)
                    break
                case !v.length:
                    print(`${' '.repeat(p + 2)}${k}: [],`)
                    break

                default:
                    print(`${' '.repeat(p + 2)}${k}: [`)
                    walkArray(v, p + 4)
                    print(`${' '.repeat(p + 2)}],`)
            }
        })

        print(`${' '.repeat(p)}}${c}`)
    }

    console.group(`%c${CONSOLE.TITLE}${date} ${time}`, CONSOLE.STYLE)
    walkArray(data, 0)
    console.groupEnd()
}

/**
 * @class Enum
 * @constructor
 */
export class Enum
{
  constructor(obj)
  {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = prop
      }
    }

    Object.freeze(this)
  }

  determine(entity)
  {
    const obj = {}

    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        obj[prop] = prop === entity
      }
    }

    return obj
  }
}

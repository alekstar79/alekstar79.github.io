/**
 * @class Cost
 * @constructor
 *
 * @property {String} id
 * @property {String} name
 * @property {String} value
 * @property {String} extra
 */
export class Cost
{
  static entry = { value: '320.00', extra: [], id: null, name: null }

  constructor(data)
  {
    let set, entity

    for (entity of Object.keys(Cost.entry)) {
      set = data[entity] || Cost.entry[entity]

      if (entity === 'extra') {
        set = JSON.stringify(set)
      }

      this[entity] = set
    }
  }
}

/**
 * @class Adapter
 * @constructor
 */
export class Adapter
{
  /**
   * Transformation of storage data according to the scheme.
   * @param {Object} data
   * @return {{rate_area_id: Number, base_charge_value: Number, extra_charges: Object[]}[]}
   */
  static perform(data)
  {
    return data.selected.map(cost => ({
      rate_area_id: cost.id,
      base_charge_value: cost.value,
      extra_charges: cost.extra
    }))
  }
}

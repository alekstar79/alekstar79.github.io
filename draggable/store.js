export class LockalStore
{
  static STATE = 'state'

  /**
  * @returns {{id: string, selector: string, lock: string, mode: number, snap: number, left: number, top: number}}
  */
  static readState()
  {
    return  JSON.parse(localStorage.getItem(LockalStore.STATE) || '{}')
  }

  /**
  * @param {{id: string, selector: string, lock: string, mode: number, snap: number, left: number, top: number}}
  */
  static writeState({ id, selector, lock, mode, snap, left, top })
  {
    const state = JSON.parse(localStorage.getItem(LockalStore.STATE) || '{}')

    state[id] = { selector, lock, mode, snap, left, top }

    localStorage.setItem(LockalStore.STATE, JSON.stringify(state))
  }
}

export class RandomSymbols
{
  static charsFromRange(min, max)
  {
    min = RandomSymbols.hexToDec(min)
    max = RandomSymbols.hexToDec(max)

    const arr = []

    for (let i = min; i <= max; i++) {
      arr.push(String.fromCharCode(RandomSymbols.decToHex(i)))
    }

    return arr
  }

  static shuffle(array, mix = 9)
  {
    let result = [...array]

    while (mix--) {
      result = result.sort(() => Math.random() - .5)
    }

    return result
  }

  /**
  * @param {String} hex
  * @returns {Number}
  */
  static hexToDec(hex)
  {
    return parseInt(hex, 16)
  }

  /**
  * @param {String} dec
  * @returns {Number}
  */
  static decToHex(dec)
  {
    return parseInt(dec, 10)
  }

  static generate(min = '30A1', max = '30FA')
  {
    const chars = RandomSymbols.charsFromRange(min, max)

    chars.push(...'!@#$^&-+":;<>?'.repeat(3).split(''))
    chars.push(...'01357910'.repeat(3).split(''))
    chars.push(...' '.repeat(10).split(''))

    return RandomSymbols.shuffle(chars)
  }
}

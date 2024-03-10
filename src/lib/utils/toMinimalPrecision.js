import is from './is'

/**
 *
 * @param {(string | number)} num
 * @param {number} [precision=8]
 * @returns  {number}
 */
export const toMinimalPrecision = (num, precision = 8) => {
  if (!is.num(num)) {
    num = parseFloat(num)
  }

  return parseFloat(num.toPrecision(precision)) / 1
}

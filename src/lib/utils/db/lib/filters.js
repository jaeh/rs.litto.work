/**
 *
 * @param {[string, string] | undefined} value
 *
 * @returns {value is [string, string]}
 * @export
 */
export const filterUndefined = value => typeof value !== 'undefined'

/**
 *
 *
 * @param {[string, string]} param
 * @param {string[]} remainingSlugs
 * @returns {[string, string] | undefined}
 * @export
 */
export const filterParams = (param, remainingSlugs) => {
  const [k, v] = param

  if (k !== 'slug' && k !== 's') {
    return param
  }

  if (remainingSlugs.includes(v)) {
    return param
  }

  return
}

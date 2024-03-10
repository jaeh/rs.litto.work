/**
 *
 * @param {object} props
 * @returns { null | string}
 */
export const cssVars = props => {
  const result = Object.entries(props)
    .filter(([key]) => key.startsWith('--'))
    .reduce((css, [key, val]) => `${css}${key}: ${val};`, '')

  if (!result?.length) {
    return null
  }

  return result
}

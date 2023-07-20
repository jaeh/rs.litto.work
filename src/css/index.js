import deep from '@magic/deep'
import is from '@magic/types'

import variables from './variables.js'

import fonts from './fonts.js'
import layout from './layout.js'
import warnings from './warnings.js'
import popups from './popups.js'
import reset from './reset.js'
import three from './three.js'
import mediaqueries from './mediaqueries.js'
import zindex from './zindex.js'
import themeStyle from './theme.js'

export const vars = variables

export const theme = (vars = variables) => {
  let styles = {}
  const libs = [
    reset,
    fonts,
    layout,
    warnings,
    popups,
    themeStyle,
    three,
    mediaqueries,
    zindex,
  ]

  libs.forEach(lib => {
    styles = deep.merge(styles, is.fn(lib) ? lib(vars) : lib)
  })

  return styles
}

import is from '@magic/types'

export const deepClean = object => {
  if (is.array(object)) {
    return object.map(deepClean)
  } else if (is.objectNative(object)) {
    const keyValues = Object.entries(object)
    return Object.fromEntries(
      keyValues
        .map(([key, val]) => {
          if (val === false) {
            return [key, val]
          }
          if (is.undefined(val) || is.falsy(val)) {
            return
          } else {
            if (is.objectNative(val) || is.array(val)) {
              val = deepClean(val)
            }
            return [key, val]
          }
        })
        .filter(a => a),
    )
  } else if (is.string(object)) {
    return object
  } else if (is.number(object)) {
    return object
  } else {
    log.warn('else', typeof object)
  }
}

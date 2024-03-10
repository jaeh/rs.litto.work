export type APIQueryKeys = {
  custom: string[]
  exclude: string[]
  always: string[]
}

export const filterByKeys = (a: DB.PossibleTypes, keys: APIQueryKeys) => {
  const copy: typeof a = { ...a }

  Object.keys(copy).forEach(key => {
    const isAlwaysKey = keys.always.length ? keys.always.includes(key) : true
    const isIncludedKey = keys.custom.length ? keys.custom.includes(key) : true
    const isExcludedKey = keys.exclude.length ? keys.exclude.includes(key) : false

    if ((!isAlwaysKey && !isIncludedKey) || isExcludedKey) {
      delete copy[key as keyof typeof copy]
    }
  })

  return copy
}

import { getQueryFromParams } from './getQueryFromParams'
import { filterByKeys } from './filterByKeys'

export const filterByParams = (
  response: DB.PossibleTypes[],
  params: URLSearchParams,
  additionalFilter: Function | undefined,
) => {
  const { slugs, keys, cities, countries, districts, continents } = getQueryFromParams(params)

  if (slugs.length || cities.length || countries.length || districts.length || continents.length) {
    response = response.filter(a => {
      let match = false

      if (slugs.length) {
        match = slugs.includes(a.slug)
      }

      if (additionalFilter) {
        match = additionalFilter({ cities, countries, continents, districts, match, a })
      }

      return match
    })
  }

  if (keys.custom.length || keys.exclude.length) {
    response = response.map(a => filterByKeys(a, keys))
  }

  return response
}

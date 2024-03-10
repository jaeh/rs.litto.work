import { isMarkerInBounds, zoomLevels, distances, is } from '$lib'
import { storage } from '$lib/utils/db/index'

/** @typedef {'continent' | 'location' | 'city' | 'country' | 'artifact'} MarkerTypes */

/**
 * @typedef {object} GetMarkerReturn
 * @property {DB.Marker[]} list
 * @property {DB.Marker[]} nearby
 */

/**
 *
 * @param {LngLatObject} center
 */
const sortByDistance = center => (/** @type {*} */ a, /** @type {*} */ b) => {
  if (center) {
    const distA = distances.meters(a, center)
    const distB = distances.meters(b, center)

    return distA < distB ? -1 : 1
  }

  return 1
}

/**
 *
 * @param {import('maplibre-gl').Map | null} map
 * @param {DB.PossiblePlanets | undefined} planet
 * @returns {Promise<GetMarkerReturn>}
 */
export const getMarkers = async (map, planet) => {
  const zoom = map?.getZoom() || 1
  const bounds = map?.getBounds()

  const center = map?.getCenter()

  if (!bounds) {
    return {
      list: [],
      nearby: [],
    }
  }

  const min = bounds._sw
  const max = bounds._ne

  /** @type {MapMarkerBrackets} */
  // let markerBrackets = null

  /** @type {MarkerTypes} */
  let markerType = 'continent'

  /** @type {URLSearchParams} */
  const params = new URLSearchParams([
    ['k', 'href'],
    ['k', 'lat'],
    ['k', 'lng'],
    ['k', 'name'],
    ['k', 'slug'],
  ])
  // console.log('params in getMarkers', params.toString())

  /** @type {DB.Artifact[] | DB.Location[] | DB.City[]} */
  let filtered = []

  if (planet) {
    // console.log('loading planet', planet)

    // if (zoom <= moonZoomLevels.location) {
    //   markerType = 'location'

    //   // params.set('city', planet)
    //   filtered = await storage.get('locations', params)
    //   if (is.arr(filtered)) {
    //     filtered = filtered.filter(l => l.city && l.city === planet)
    //   }
    //   //  console.log('moon locations', filtered, params)
    // } else {
    markerType = 'artifact'
    filtered = storage.getArtifactMarkers(planet)
    // console.log('moon artifacts', filtered, params)
    // }
  } else {
    // if (zoom < zoomLevels.continent) {
    //   params.append('k', 'cnt')
    //   filtered = await storage.get('continents', params)
    //   markerType = 'continent'
    // } else if (zoom < zoomLevels.country) {
    //   params.append('k', 'cnt')
    //   filtered = await storage.get('countries', params)
    //   markerType = 'country'
    // } else
    if (zoom < zoomLevels.city) {
      params.append('k', 'cnt')
      filtered = storage.getCityMarkers()
      markerType = 'city'
    } else if (zoom < zoomLevels.location) {
      params.append('k', 'cnt')
      filtered = storage.getLocationMarkers()
      markerType = 'location'
    } else {
      filtered = storage.getArtifactMarkers()
      markerType = 'artifact'
    }
  }

  if (!filtered) {
    console.error('filtered is undefined', { filtered, markerType })
    return { list: [], nearby: [] }
  }

  if (!is.arr(filtered)) {
    console.error('storage.get got weird results', filtered)
    return { list: [], nearby: [] }
  }

  // console.log('filtered exists', filtered)

  /** @type {DB.Marker[]} */
  let list = []

  filtered.forEach(a => {
    const isInBounds = isMarkerInBounds({ ...a, max, min, zoom })

    if (isInBounds) {
      const type = a?.featured ? 'hidden' : markerType

      list.push({ ...a, type })
    }
  })

  /** @type {DB.Marker[]} */
  let nearby = []

  filtered.forEach((/** @type {*} */ a) => {
    if (nearby.length < 10 && !list.includes(a)) {
      if (center?.lat && center?.lng) {
        const { lat, lng } = center
        const distance = distances.meters(a, { lat, lng })
        nearby.push({ ...a, distance, type: markerType })
      }
    }
  })

  if (zoom >= zoomLevels.artifact && center) {
    const sorter = sortByDistance(center)
    list = list.sort(sorter)
    nearby = nearby.sort(sorter)
  }

  /** @type {string[]} */
  const existing = []

  list = list.filter(a => {
    if (existing.includes(a.slug)) {
      console.error('list had duplicates!!!', list, a)
      return false
    }

    existing.push(a.slug)
    return true
  })

  /** @type {string[]} */
  const existingNearby = []

  nearby = list.filter(a => {
    if (existingNearby.includes(a.slug)) {
      console.error('nearby had duplicates!!!', list, a)
      return false
    }

    existingNearby.push(a.slug)
    return true
  })

  return {
    list,
    nearby,
  }
}

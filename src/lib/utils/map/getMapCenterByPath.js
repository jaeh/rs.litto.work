import { storage, zoomLevels } from '$lib'

import { earth } from './config.js'

/**
 *
 * @param {string} pathname
 * @returns
 */
export const getMapCenterByPath = pathname => {
  const pathParts = pathname.split('/').filter(a => a)
  const [continentSlug, countrySlug, citySlug, locationSlug, artifactSlug] = pathParts

  /** @type {import('svelte-maplibre').LngLatLike} */
  let center = earth.center
  /** @type {number} */
  let zoom = earth.zoom

  if (artifactSlug) {
    /** @type {DB.Artifact} */
    const item = /** @type {DB.Artifact} */ (storage.getArtifact(artifactSlug))
    if (item) {
      const { lng, lat } = item

      return {
        center: { lng, lat },
        zoom: zoomLevels.artifact,
      }
    }
  } else if (locationSlug) {
    /** @type {DB.Location} */
    const item = /** @type {DB.Location} */ (storage.getItem('locations', locationSlug))
    if (item) {
      const { lng, lat } = item
      return {
        center: { lng, lat },
        zoom: zoomLevels.location,
      }
    }
  } else if (citySlug) {
    /** @type {DB.City} */
    const item = /** @type {DB.City} */ (storage.getItem('cities', citySlug))
    if (item) {
      const { lng, lat } = item
      return {
        center: { lng, lat },
        zoom: zoomLevels.city,
      }
    }
  } else if (countrySlug) {
    /** @type {DB.Country} */
    const item = /** @type {DB.Country} */ (storage.getItem('countries', countrySlug))
    if (item) {
      const { lng, lat } = item
      return {
        center: { lng, lat },
        zoom: zoomLevels.city,
      }
    }
  } else if (continentSlug) {
    /** @type {DB.Continent} */
    const continent = /** @type {DB.Continent} */ (storage.getItem('continents', continentSlug))
    if (continent) {
      const { lng, lat } = continent
      return {
        center: { lng, lat },
        zoom: zoomLevels.continent,
      }
    } else {
      /** @type {DB.Planet} */
      const planet = /** @type {DB.Planet} */ (storage.getItem('planets', continentSlug))
      if (planet) {
        const { lng, lat } = planet
        return {
          center: { lng, lat },
          zoom: planet.zoom,
        }
      }
    }
  }

  return {
    center,
    zoom,
  }
}

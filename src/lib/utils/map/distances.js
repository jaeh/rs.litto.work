// https://en.wikipedia.org/wiki/Earth_radius
// The International Union of Geodesy and Geophysics (IUGG) recommends three values:
// the arithmetic mean of the radii measured at the equator and the poles (R1);
// the authalic radius, which is the radius of a sphere with the same surface area (R2);
// and the volumetric radius, which is the radius of a sphere having the same volume as the ellipsoid (R3).
// [2] All three values are about 6,371 kilometres (3,959 mi).

import { is } from '../is'

/**
 *
 * @param {number} degrees
 */
const dToR = degrees => degrees * (Math.PI / 180)
const M = Math

export const earthRadiusKm = 6371

export const latDegreeKm = 111.3
export const lngDegreeKmAtEquator = 111.3

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 * @returns
 */
export const kilometers = (a, b) => {
  const dLat = dToR(b.lat - a.lat) / 2
  const dLng = dToR(b.lng - a.lng) / 2

  const aLatRadians = dToR(a.lat)
  const bLatRadians = dToR(b.lat)

  const dLatSin = M.sin(dLat) * M.sin(dLat)
  const dLngSin = M.sin(dLng) * M.sin(dLng)
  const latCos = M.cos(aLatRadians) * M.cos(bLatRadians)

  const atan = dLatSin + dLngSin * latCos

  const c = 2 * M.atan2(M.sqrt(atan), M.sqrt(1 - atan))

  const distance = earthRadiusKm * c

  return distance
}

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 */
export const meters = (a, b) => kilometers(a, b) * 1000

/**
 *
 *
 * @param {LngLatObject} pos
 * @param {LngLatObject[]} arr
 */
export const sortByClosest = (pos, arr = []) =>
  arr.sort((a, b) => {
    const distanceA = meters(pos, a)
    const distanceB = meters(pos, b)

    return distanceA - distanceB
  })

/**
 *
 *
 * @param {LngLatObject} pos
 * @param {LngLatObject[]} arr
 */
export const getClosest = (pos, arr = []) => sortByClosest(pos, arr)[0]

/**
 *
 *
 * @param {(number | LngLatObject)} a
 * @param {PossibleLngLatStrings} [t='lat']
 * @returns  {number}
 */
export const getGeoValue = (a, t = 'lat') => (is.number(a) ? a : a[t])

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 * @returns
 */
export const latDistanceKm = (a, b) => {
  const aLat = getGeoValue(a, 'lat')
  const bLat = getGeoValue(b, 'lat')

  return M.abs(aLat - bLat) * latDegreeKm
}

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 */
export const latDistanceM = (a, b) => latDistanceKm(a, b) * 1000

/**
 *
 *
 * @param {number} lat
 * @returns
 */
export const lngDistanceAtLat = lat => {
  const radians = dToR(lat)

  const cos = M.cos(radians)

  return cos * lngDegreeKmAtEquator
}

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 * @returns
 */
export const lngDistanceKm = (a, b) => {
  // get average latitude of our distance
  const averateLat = (a.lat + b.lat) / 2

  const lngDistance = M.abs(lngDistanceAtLat(averateLat))

  const distance = M.abs(a.lng - b.lng) * lngDistance

  return distance
}

/**
 *
 *
 * @param {LngLatObject} a
 * @param {LngLatObject} b
 */
export const lngDistanceM = (a, b) => lngDistanceKm(a, b) * 1000

export const distances = {
  kilometers,
  meters,
  km: kilometers,
  m: meters,
  getClosest,
  closest: getClosest,
  sortByClosest,
  latDistanceKm,
  latDistanceM,
}

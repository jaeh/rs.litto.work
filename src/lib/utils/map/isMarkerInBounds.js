/**
 * gets lat and lng of a marker and compares it to max and min
 * to calculate, if a certain marker is in the map bounds.
 *
 * @param {object} args
 * @param {number} args.lat
 * @param {number} args.lng
 * @param {LngLatObject} args.min
 * @param {LngLatObject} args.max
 * @param {number} args.zoom
 * @param {boolean} [args.debug]
 * @returns {boolean}
 */
export const isMarkerInBounds = ({ lat, lng, max, min /*zoom*/ }) => {
  const latMax = lat < max.lat
  const latMin = lat > min.lat
  const lngMax = lng < max.lng
  const lngMin = lng > min.lng

  return latMax && latMin && lngMax && lngMin
}

/**
 * @typedef ZoomLevelsMoon
 * @property {number} location
 * @property {number} artifact
 */

/**
 * @typedef ZoomLevelsEarth
 * @property {number} continent
 * @property {number} country
 * @property {number} city
 *
 * @typedef {ZoomLevelsMoon & ZoomLevelsEarth} ZoomLevels
 */

/** @type {ZoomLevels} */
export const zoomLevels = {
  continent: 3,
  country: 6,
  city: 9,
  location: 16,
  artifact: 18,
}

/** @type {ZoomLevelsMoon} */
export const moonZoomLevels = {
  location: 4,
  artifact: 5,
}

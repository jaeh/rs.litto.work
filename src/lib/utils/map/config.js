/**
 * @typedef {object} EarthConfig
 * @property {number} minZoom
 * @property {number} maxZoom
 * @property {number} zoom
 * @property {import('svelte-maplibre').LngLatLike} center
 */
export const earth = {
  minZoom: 0,
  maxZoom: 22,
  zoom: 2,
  center: { lng: 13, lat: 49 },
}

export const shrinkMapSwitchWidth = 1160

/**
 * @typedef {object} MoonStyleArgs
 * @property {DB.PossiblePlanets} layerName
 * @property {string} url
 * @property {'jpg' | 'png'} [imageExtension=jpg]
 * @property {'http' | 'https'} [protocol=https]
 */

/**
 * @typedef {(args: MoonStyleArgs) => import('svelte-maplibre').StyleSpecification} MoonStyle
 */

/** @type {MoonStyle} */
export const moonStyle = ({ layerName, protocol = 'https', url, imageExtension = 'jpg' }) => ({
  version: 8,

  layers: [
    {
      id: layerName,
      source: layerName,
      type: 'raster',
      minzoom: 2,
      maxzoom: 5,
    },
  ],

  sources: {
    moon: {
      type: 'raster',
      tiles: [
        `${protocol}://map1.${url}/${layerName}/{z}/{x}/{y}.${imageExtension}`,
        `${protocol}://map2.${url}/${layerName}/{z}/{x}/{y}.${imageExtension}`,
        `${protocol}://map3.${url}/${layerName}/{z}/{x}/{y}.${imageExtension}`,
      ],
    },
  },
})
